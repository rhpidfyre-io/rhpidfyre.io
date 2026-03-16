setup:
	cd web && pnpm install
	cd express && pnpm install

clean:
	rm -rf ./web/dist

# build
build-web:
	rm -rf ./web/dist
	cd web && pnpm install
	cd web && pnpm run build

# image
docker-web:
	docker build ./web -t rhpidfyre_io

docker-express:
	docker build ./express -t rhpidfyre_io_server
