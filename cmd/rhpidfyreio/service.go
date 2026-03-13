package main

import (
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port, port_ok := os.LookupEnv("PORT")
	if !port_ok {
		port = "3000"
	}

	r := gin.Default()

	r.Run(":" + port)
}
