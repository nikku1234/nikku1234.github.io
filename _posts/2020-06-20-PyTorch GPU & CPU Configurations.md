---
layout: post
title: PyTorch GPU & CPU Configurations
subtitle: PyTorch
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [pytorch,cpu,gpu,deep-learning,configurations]
image: /assets/img/logos/pytorch.png
---
# PyTorch CPU/GPU configurations


## CPU

### Create Environment

#### Enter this command in Terminal to install Python 3.6, NumPy 1.13.3, and the newest version of SciPy.

	conda create -n pytorch python=3.6 numpy=1.13.3 scipy

Note: including a conda package without a version number installs the latest and greatest by default.

#### Activate Environment

You have to activate the environment to actually use it.

	source activate pytorch

#### List Packages

Now we’re inside the pytorch container (notice pytorch in parantheses?). We can see which packages are installed by typing:

	conda list

#### Install PyTorch

	conda install pytorch torchvision -c pytorch

#### Deactivate Environment

We can return to the root environment by typing:

	source deactivate

#### List Environments

	conda info –envs

#### GPU

	conda install pytorch torchvision cudatoolkit=10.1 -c pytorch
