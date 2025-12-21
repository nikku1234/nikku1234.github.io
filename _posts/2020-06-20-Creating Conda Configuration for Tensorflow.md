---
layout: post
title: Creating Conda Configuration for Tensorflow
subtitle: Tensorflow
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [Conda,Configuration,Tensorflow]
image: /assets/img/logos/tensorflow.png
---
# Creating Conda Configuration for Tensorflow

### Making the conda variable to be called globally

	export PATH=~/anaconda3/bin:$PATH

### List the conda environments

    conda env list

### List the packages in the particular conda environment

    conda list  

### Create a new environment tensorflow with all necessary packages

	conda create -n tensorflow python numpy scipy matplotlib spyder

### Activate the environment

    activate tensorflow

### Install tensorflow and keras

	pip install tensorflow

	pip install keras

### Install Scikit-Image

	pip install scikit-image

### Install OpenCV

	pip install opencv-python
