FROM golang:alpine

WORKDIR /build

COPY go.mod go.sum ./

RUN go mod tidy && go build -o server

EXPOSE 3000

CMD ["/build/server"]
