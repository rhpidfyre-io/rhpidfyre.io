package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port, port_ok := os.LookupEnv("PORT")
	clientid, clientid_ok := os.LookupEnv("CLIENT_ID")
	auth, auth_ok := os.LookupEnv("AUTH_URL")
	if !port_ok {
		port = "3000"
	}
	if !clientid_ok {
		log.Fatal("Environment variable CLIENT_ID is not set. STOPPING")
	}
	if !auth_ok {
		log.Fatal("Environment variable AUTH_URL is not set. STOPPING")
	}

	r := gin.Default()
	api := r.Group("/v1")
	r.GET("/auth", auth.ServerRedirect)

	log.Fatal(r.Run(":" + port))
}
