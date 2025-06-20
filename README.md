# rhpidfyre.io
My personal website

# Development
1. Have [bun](https://bun.sh/) (recommended) installed or another node package manager like [npm](https://www.npmjs.com/).
2. Install the dependencies with `bun install`.
3. Start the development server with `bun run start`.
4. Build for production with `bun run build`.

# Deploying
A docker file is provided for easy deployment

1. Build the container:
```sh
docker build -t rhpidfyre-io .
```
2. Deploy the container:
```sh
docker run --restart=unless-stopped -d -p "80:80" rhpidfyre-io
```
3. The command above exposes port `80` on the host, you can change this via `-p "8000:80"`.