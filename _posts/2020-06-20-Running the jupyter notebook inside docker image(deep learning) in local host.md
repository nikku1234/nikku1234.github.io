---
layout: post
title: Running the jupyter notebook inside docker image(deep learning) in local host
subtitle: Docker
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [docker,jupyter,notebook,deep-learning]
image: /assets/img/logos/docker.png
---
# Running the Jupyter notebook inside Docker Image(deep learning) in local host

### Step 1: In putty , set up an ssh tunnel

	(Using the tunnels option under ssh in category section)

### Step 2: Connect the docker container port (destination port) to the port (source port)

	Destination port : localhost:8888

	Source port : 8000

	Add the port to the tunnel and click open

### Step 3: In the ssh shell,

#### List the containers

	docker ps -l

#### List the images

	docker images

#### Remove the images

	docker rmi <Image ID>
	Remove the container

	docker rm <Container ID>

#### Run the docker container

	docker run -it image-id bash
-it interacting with the docker

#### Directly running the jupyter notebook and tunnel the port to the local host from the remote system

	docker run -it -p 5000:8888 --ipc=host nikhil:full jupyter notebook --no-browser --ip=0.0.0.0 --allow-root --NotebookApp.token= --notebook-dir='/root'
Parameters to be changed

	-p (source port): (port to which docker should be binded with)

	<nikhil:full> docker image with tag

### Step 4: Run it in the browser

	https://localhost:8888

#### Kill the processes

	kill -9 pid

#### To know the open ports

	sudo lsof -i -P -n
