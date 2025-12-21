---
layout: post
title: NVidia Drivers Configuration
subtitle: Nvidia
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [nvidia,cpu,gpu,deep-learning,configurations,fan-control,sli]
image: /assets/img/logos/nvidia.png
---
## Nvidia Drivers

This will be a step-by-step tutorial on how to Install NVidia drivers, enabling SLI (if applicable) & control the GPU-fan speed at start-up.

**1. Installation of Drivers**

**2. Enabling SLI**

**3. Fan control at boot**


***INSTALLATION OF DRIVERS:***

For installation of STABLE drivers, add the following PPA to your system

CODE:

	deb http://ppa.launchpad.net/ubuntu-x-swat/x-updates/ubuntu trusty main
	deb-src http://ppa.launchpad.net/ubuntu-x-swat/x-updates/ubuntu trusty main

CODE:

	sudo apt-get update


CODE:

	sudo apt-get upgrade && sudo  apt-get dist-upgrade


Once everything is done, close it out and open up your "Driver Manager" and select the version you want.
STABLE = nVidia-352.63
--You can select nVidia-352-updates, if you want to... but it's less stable.

Once you've chosen, let it install and complete (this may take a few minutes) then reboot when completed.

***A. In terminal run:***

CODE:  

	sudo nvidia-xconfig


***B. In terminal run:***
CODE:

	sudo nvidia-xconfig --cool-bits=12

***C. In terminal run:***

CODE: SELECT ALL

    sudo reboot

***D. Once booted, run:***

CODE: SELECT ALL

	sudo nvidia-settings

***E. Click on x-server and set up your display(s), then apply.***

***F. Click "save to x-configuration file.***

***G. Click THERMAL SETTINGS under your video card***

***H. Click AGREE, scroll to bottom, then close.***

***I. Adjust fan to desired speed.***

***J. Close settings window & terminal.***



## SETTING UP SLI

- begin by getting everything closed out, so your DE is running.
- open your terminal, and enter

CODE:

	sudo nvidia-xconfig --sli=On

***A. a new xorg.conf will be created... this is normal. Accept the new build and continue.***
***B. Once that's done, enter***

CODE:

	sudo reboot

***C. After reboot, open your file-browser (nemo) and head to /etc/X11***
***D. As root, open xorg.conf and in (Section "Screen") change SLI from off to On. (big O, little n)***
***E. Save and close the file.***











## FAN CONTROL AT START-UP:
--- If you have done all of the above in this tutorial, then you do not need to do the first step in this section.

***A. In terminal run:***

	"sudo nvidia-xconfig --cool-bits=12"

***B. Navigate to ~/.config/autostart/ now create a document named "nvidia-fan-speed.desktop"***

***C. open the file with a text editor.***

***D. so there are no fowl-ups, copy and paste the text below into the file.***

***E. replace XX with the fan speed you would like. 10-100, numerical value only, no percent sign needed.***
CODE:  

    [Desktop Entry]
	Type=Application
	Exec=nvidia-settings -a "[gpu:0]/GPUFanControlState=1" -a "[fan:0]/GPUCurrentFanSpeed=XX"
	X-GNOME-Autostart-enabled=true
	Name=nvidia-fan-speed

***F. To add in the second GPU-fan, add the code below into the file.***

    CODE:  
	[Desktop Entry]
	Type=Application
	Exec=nvidia-settings -a "[gpu:1]/GPUFanControlState=1" -a "[fan:1]/GPUCurrentFanSpeed=XX"
	X-GNOME-Autostart-enabled=true
	Name=nvidia-fan-speed

***G. save and exit the file.***

***H. log out of your system, then back in.***
