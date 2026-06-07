start:
	docker build -t personal-webpage .
	docker run -d -p 80:80 personal-webpage 

stop:
	docker stop $$(docker ps -a -q --filter ancestor=personal-webpage --format="{{.ID}}")
	docker rm $$(docker ps -a -q --filter ancestor=personal-webpage --format="{{.ID}}")
