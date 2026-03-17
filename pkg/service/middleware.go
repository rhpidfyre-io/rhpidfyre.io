package service

import (
	"context"
	"net/http"
	"strings"

	"github.com/MicahParks/keyfunc/v3"
	"github.com/coreos/go-oidc/v3/oidc"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

var jwks keyfunc.Keyfunc

func RequireAuth(c *gin.Context, auth_server *string, client_id *string) {
	provider, err := oidc.NewProvider(context.Background(), issuer)
	if err != nil {
		panic("failed to connect to Authentik: " + err.Error())
	}
	verifier := provider.Verifier(&oidc.Config{ClientID: "YOUR_CLIENT_ID"})

	header := c.GetHeader("Authorization")
	if !strings.HasPrefix(header, "Bearer ") {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "missing token"})
		return
	}

	tokenStr := strings.TrimPrefix(header, "Bearer ")

	token, err := jwt.Parse(tokenStr, jwks.Keyfunc,
		jwt.WithIssuer("http://"+*auth_server+"/application/o/blog-app/"),
		jwt.WithAudience(*client_id),
		jwt.WithValidMethods([]string{"RS256"}),
	)
	if err != nil || !token.Valid {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
		return
	}

	claims := token.Claims.(jwt.MapClaims)

	// // Upsert user into Postgres, attach to context
	// user, err := upsertUser(c.Request.Context(), claims)
	// if err != nil {
	// 	c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "db error"})
	// 	return
	// }

	// c.Set("user", user)
	c.Set("claims", claims)
	c.Next()
}
