setup:
	cd web && pnpm install
	cd express && pnpm install

clean:
	rm -rf ./web/dist

web:
	rm -rf ./web/dist
	cd web && pnpm install
	cd web && pnpm run build

server:
	CGO_ENABLED=0 GOOS=linux go build -o rhpidfyreio_server ./cmd/server

# image
docker-web:
	docker build ./web -t rhpidfyre_io

docker-express:
	docker build ./express -t rhpidfyre_io_server
