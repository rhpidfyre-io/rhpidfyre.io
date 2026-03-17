package service

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rhpidfyre-io/rhpidfyre.io/pkg/service"
)

func Api(config ApiConfig) {
	api_root := gin.Default()
	api_root.GET("/auth", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, *config.authUrl)
	})

	api_main := api_root.Group("/v1")
	api_main.Use(func(c *gin.Context) {
		service.RequireAuth(c, config.authUrl, config.clientId)
	})
	api_main.GET("/blogs", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, *config.authUrl)
	})

	log.Fatal(api_root.Run(":" + *config.port))
}
