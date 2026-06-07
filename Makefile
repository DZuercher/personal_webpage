target: build
	docker build -t personal-webpage:v1 .
	docker push dzuercher/personal-webpage:v1
