bootstrap: down kill up

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up

deno:
	@yarn deno
