package api

import (
	"context"
	"net/http"
	"strings"

	"github.com/coreos/go-oidc/v3/oidc"
	"github.com/gin-gonic/gin"
)

func RequireAuth(ctx *gin.Context, cfg *Config) {
	provider, err := oidc.NewProvider(context.Background(), cfg.Issuer)
	if err != nil {
		panic("Failed to connect to Authentik: " + err.Error())
	}
	verifier := provider.Verifier(&oidc.Config{ClientID: cfg.ClientId})

	raw := strings.TrimPrefix(ctx.GetHeader("Authorization"), "Bearer ")
	if raw == "" {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "missing token"})
		return
	}
	token, err := verifier.Verify(ctx.Request.Context(), raw)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
		return
	}

	var claims map[string]any
	token.Claims(&claims)
	ctx.Set("claims", claims)
	ctx.Next()
}
