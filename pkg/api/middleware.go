package auth

import (
	"net/http"
	"strings"

	"github.com/MicahParks/keyfunc/v3"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

var jwks keyfunc.Keyfunc

func RequireAuth(auth_server string, client_id string) gin.HandlerFunc {
	return func(c *gin.Context) {
		header := c.GetHeader("Authorization")
		if !strings.HasPrefix(header, "Bearer ") {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "missing token"})
			return
		}

		tokenStr := strings.TrimPrefix(header, "Bearer ")

		token, err := jwt.Parse(tokenStr, jwks.Keyfunc,
			jwt.WithIssuer("http://"+auth_server+"/application/o/blog-app/"),
			jwt.WithAudience(client_id),
			jwt.WithValidMethods([]string{"RS256"}),
		)
		if err != nil || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
			return
		}

		claims := token.Claims.(jwt.MapClaims)

		// Upsert user into Postgres, attach to context
		user, err := upsertUser(c.Request.Context(), claims)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "db error"})
			return
		}

		c.Set("user", user)
		c.Set("claims", claims)
		c.Next()
	}
}
