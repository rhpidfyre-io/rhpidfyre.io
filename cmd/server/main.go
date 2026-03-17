package main

import (
	"log"
	"os"

	"github.com/rhpidfyre-io/rhpidfyre.io/pkg/api"
)

const PROMPT_PADDING = "\n-*-*-*-*-*-*-*-*-*-*-"
const REQUIRED_ENVS_PROMPT = `
!REQUIRED! environment variables:
CLIENT_ID=
AUTH_URL=
ISSUER=` + PROMPT_PADDING

func missing_env_var(env_name string) {
	log.Fatal("Environment variable: " + env_name + " is not set, STOPPING." + REQUIRED_ENVS_PROMPT)
}

func main() {
	port, port_set := os.LookupEnv("PORT")
	issuer, issuer_set := os.LookupEnv("ISSUER")
	auth_url, auth_url_set := os.LookupEnv("AUTH_URL")
	clientid, clientid_set := os.LookupEnv("CLIENT_ID")

	if !clientid_set {
		missing_env_var("CLIENT_ID")
	}
	if !auth_url_set {
		missing_env_var("AUTH_URL")
	}
	if !issuer_set {
		missing_env_var("ISSUER")
	}
	if !port_set {
		port = "3000"
		log.Println("Environment variable PORT is not set, DEFAULTING to 3000." + PROMPT_PADDING)
	}
	api.Start(&api.Config{
		AuthUrl:  auth_url,
		Port:     port,
		ClientId: clientid,
		Issuer:   issuer,
	})
}
