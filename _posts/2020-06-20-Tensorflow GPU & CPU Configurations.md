---
layout: post
title: Tensorflow GPU & CPU Configurations
subtitle: Tensorflow
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [tensorflow,cpu,gpu,deep-learning,configurations]
image: /assets/img/logos/tensorflow.png
---
# GPU/CPU Environment Configurations Tensorflow


###	 TensorFlow

#### CPU Version

	conda create -n tensorflow_env tensorflow
	conda activate tensorflow_env

#### GPU Version

	conda create -n tensorflow_gpuenv tensorflow-gpu
	conda activate tensorflow_gpuenv
