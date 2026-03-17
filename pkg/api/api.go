package api

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Config struct {
	AuthUrl   string
	Port      string
	ClientId  string
	Issuer    string
	Debugging bool
}

func v1(api_root *gin.Engine, cfg *Config) {
	api_v1 := api_root.Group("/v1")
	api_v1.Use(func(ctx *gin.Context) {
		RequireAuth(ctx, cfg)
	})
	api_v1.GET("/blogs", func(c *gin.Context) {

	})
}

func Start(cfg *Config) {
	if !cfg.Debugging {
		gin.SetMode(gin.ReleaseMode)
	}
	api_root := gin.Default()

	// Redirect /auth
	api_root.GET("/auth", func(ctx *gin.Context) {
		ctx.Redirect(http.StatusMovedPermanently, cfg.AuthUrl)
	})

	v1(api_root, cfg)
	log.Fatal(api_root.Run(":" + cfg.Port))
}
