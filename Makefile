.PHONY: all

all: kill-port start-dev start-example-service

kill-port:
	@echo "Killing process listening on port 5555"
	@lsof -ti tcp:5555 | xargs kill -9 || true

start-example-service:
	@echo "Starting example-service"
	yarn start:dev example-service &

start-dev:
	@echo "Starting dev"
	yarn start:dev &

