package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ServerRedirect(c *gin.Context, auth string) {
	c.Redirect(http.StatusMovedPermanently, auth)
}
