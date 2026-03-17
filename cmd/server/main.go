package main

import (
	"log"
	"os"
)

const REQUIRED_ENVS_PROMPT = `
Environment variables required:
CLIENT_ID=
AUTH_URL=
ISSUER=
-*-*-*-*-*-*-*-*-*-*-`

type ApiConfig struct {
	authUrl  *string
	port     *string
	clientId *string
}

func main() {
	port, port_set := os.LookupEnv("PORT")
	issuer, issuer_set := os.LookupEnv("ISSUER")
	auth_url, auth_url_set := os.LookupEnv("AUTH_URL")
	clientid, clientid_set := os.LookupEnv("CLIENT_ID")

	if !port_set {
		port = "3000"
		log.Println("Environment variable PORT is not set, DEFAULTING to 3000.")
	}
	if !clientid_set {
		log.Fatal("Environment variable CLIENT_ID is not set, STOPPING." + REQUIRED_ENVS_PROMPT)
	}
	if !auth_url_set {
		log.Fatal("Environment variable AUTH_URL is not set, STOPPING." + REQUIRED_ENVS_PROMPT)
	}

	api(ApiConfig{
		&auth_url,
		&port,
		&clientid,
	})
}
