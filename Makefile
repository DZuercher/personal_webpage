start:
	- docker stop $$(docker ps -a --filter ancestor=personal-webpage --format="{{.ID}}")
	- docker rm $$(docker ps -a --filter ancestor=personal-webpage --format="{{.ID}}")
	docker build -t personal-webpage .
	docker run -d -p 80:80 personal-webpage 

stop:
	docker stop $$(docker ps -a --filter ancestor=personal-webpage --format="{{.ID}}")
	docker rm $$(docker ps -a --filter ancestor=personal-webpage --format="{{.ID}}")

test:
	docker build -t personal-webpage .
	docker run -d -p 80:80 personal-webpage 
	docker stop $$(docker ps -a --filter ancestor=personal-webpage --format="{{.ID}}")
	docker rm $$(docker ps -a --filter ancestor=personal-webpage --format="{{.ID}}")
