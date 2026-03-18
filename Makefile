setup:
	cd web && pnpm install
	go mod download

clean:
	rm -rf ./web/dist
	rm ./rhpidfyreio_server

web:
	rm -rf ./web/dist
	cd web && pnpm install
	cd web && pnpm run build

server:
	CGO_ENABLED=0 GOOS=linux go build -o rhpidfyreio_server ./cmd/server

# image
docker-web:
	docker build ./web -t rhpidfyre_io

docker-server:
	docker build . -t rhpidfyre_io_server
