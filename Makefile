.PHONY: db-build db-rebuild db-up db-down

db-build:
	docker-compose -f infra/database/docker-compose.yml build

db-rebuild:
	docker-compose -f infra/database/docker-compose.yml build --no-cache

db-up:
	docker-compose -f infra/database/docker-compose.yml up -d

db-down:
	docker-compose -f infra/database/docker-compose.yml down
