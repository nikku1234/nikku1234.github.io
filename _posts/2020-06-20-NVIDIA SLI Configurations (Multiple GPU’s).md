---
layout: post
title: NVIDIA SLI Configurations (Multiple GPU’s)
subtitle: Nvidia GPU Configurations
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [nvidia,gpu,sli,configuration]
image: /assets/img/logos/nvidia.png
---

# NVIDIA SLI Configurations (Multiple GPU’s)


•	Open up Terminal.

•	Use the following command of your choice:

	sli=on (enables SLI)
	sli=auto (Allows nvidia-xconfig to automatically enable SLI if it detects an SLI-ready setup)
	sli=afr (enables SLI in AFR mode)
	sli=sfr (enables SLI in SFR mode).

Terminal commands:

    sudo nvidia-xconfig -sli=on
	sudo nvidia-xconfig -sli=auto
	sudo nvidia-xconfig -sli=afr
	sudo nvidia-xconfig -sli=sfr
	sudo nvidia-xconfig -sli=off

•	Put in your password

•	Reboot Ubuntu (sudo reboot via terminal or via the GUI)

•	Open up the “nVidia X Server Settings” program

•	Select any GPU in the list, and look for the screen output. If SLI is indeed enabled? It will say “(SLI)” at the end of the detected screen output.

The Only difference is if you have a Multi-GPU (such as the GTX 690) you change the argument of sli to multigpu.

Terminal commands:

	sudo nvidia-xconfig -multigpu=on
	sudo nvidia-xconfig -multigpu=auto
	sudo nvidia-xconfig -multigpu=afr
	sudo nvidia-xconfig -multigpu=sfr
	sudo nvidia-xconfig -multigpu=off

If you have Multi-GPU cards in your system in SLI (such as two GTX 690’s with the appropriate SLI bridge) you just have to mix the commands together.Terminal commands:

	sudo nvidia-xconfig -sli=on -multigpu=on
	sudo nvidia-xconfig -sli=auto -multigpu=auto
	sudo nvidia-xconfig -sli=afr -multigpu=afr
	sudo nvidia-xconfig -sli=sfr -multigpu=sfr
	sudo nvidia-xconfig -sli=off -multigpu=off

On Practice:

	sudo nvidia-xconfig --sli=On
•	Reboot
