---
layout: post
title: Getting started with Opencv with C++
gh-repo: nikku1234/Computer-Vision--SLAM-
gh-badge: [star, fork, follow]
tags: [opencv,getting-started,c++,xcode]
image: /assets/img/logos/opencv.png
---

# Configuration for Mac - Xcode

This article is about how to configure Xcode env for running OpenCv with C++ projects.



# Terminal

1. Install Xcode v10.2

2. Install Command Line Tools

		xcode-select --install

3. Install homebrew

		/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

4. Install OpenCV

		brew install opencv
OpenCV located at “/usr/local/Cellar/opencv/”

-   To remove

		brew rm opencv

-   To update all installed packages

		brew update && brew upgrade && brew cleanup

5. Install pkg-config

		brew install pkg-config
	pkg-config located at /usr/local/lib/pkgconfig/ where containing symlink to package, checking opencv4.pc exist or not.

If opencv4.pc does not exist, make a symlink:

-   Put to ./bash_profile

		export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig/

-   Make a symlink

		ln -s /usr/local/Cellar/opencv/4.0.1/lib/pkgconfig/opencv4.pc $PKG_CONFIG_PATH

6. Check OpenCV linker flags

		pkg-config --cflags --libs opencv4

Look like this:

-I/usr/local/Cellar/opencv/4.0.1/include/opencv4/opencv -I/usr/local/Cellar/opencv/4.0.1/include/opencv4 -L/usr/local/Cellar/opencv/4.0.1/lib -lopencv_gapi -lopencv_stitching -lopencv_aruco -lopencv_bgsegm -lopencv_bioinspired -lopencv_ccalib -lopencv_dnn_objdetect -lopencv_dpm -lopencv_face -lopencv_fuzzy -lopencv_hfs -lopencv_img_hash -lopencv_line_descriptor -lopencv_reg -lopencv_rgbd -lopencv_saliency -lopencv_stereo -lopencv_structured_light -lopencv_phase_unwrapping -lopencv_superres -lopencv_optflow -lopencv_surface_matching -lopencv_tracking -lopencv_datasets -lopencv_dnn -lopencv_plot -lopencv_videostab -lopencv_video -lopencv_xfeatures2d -lopencv_shape -lopencv_ml -lopencv_ximgproc -lopencv_xobjdetect -lopencv_objdetect -lopencv_calib3d -lopencv_features2d -lopencv_highgui -lopencv_videoio -lopencv_imgcodecs -lopencv_flann -lopencv_xphoto -lopencv_photo -lopencv_imgproc -lopencv_core

-   If you get an error, then change opencv4 to opencv

		pkg-config --cflags --libs opencv

- If still error, you might need to specify the location of opencv.pc file

		pkg-config --cflags --libs path/to/opencv.pc

Ex:

	pkg-config --cflags --libs /usr/local/Cellar/opencv/4.0.1/lib/pkgconfig/opencv4.pc
## Xcode Config

-   Open Xcode -> New Project -> macOS -> Command Line Tool -> Next -> Select language C++
-  Edit project running scheme -> Run -> Options -> Check on Working Directory to Use custom working directory with the path of current source files folder. -> Close
- Edit Scheme
- -   Select Project -> Build Settings ->Header Search Paths: 			/usr/local/Cellar/opencv/4.1.2/include (recursive)
	-  Library Search Paths: /usr/local/Cellar/opencv/4.1.2/lib (recursive)
	- Other Linker Flags: Insert all content from ‘pkg-config — cflags — libs opencv4’

		Content like:

			-I/usr/local/Cellar/opencv/4.0.1/include/opencv4/opencv -I/usr/local/Cellar/opencv/4.0.1/include/opencv4 -L/usr/local/Cellar/opencv/4.0.1/lib -lopencv_gapi -lopencv_stitching -lopencv_aruco -lopencv_bgsegm -lopencv_bioinspired -lopencv_ccalib -lopencv_dnn_objdetect -lopencv_dpm -lopencv_face -lopencv_fuzzy -lopencv_hfs -lopencv_img_hash -lopencv_line_descriptor -lopencv_reg -lopencv_rgbd -lopencv_saliency -lopencv_stereo -lopencv_structured_light -lopencv_phase_unwrapping -lopencv_superres -lopencv_optflow -lopencv_surface_matching -lopencv_tracking -lopencv_datasets -lopencv_dnn -lopencv_plot -lopencv_videostab -lopencv_video -lopencv_xfeatures2d -lopencv_shape -lopencv_ml -lopencv_ximgproc -lopencv_xobjdetect -lopencv_objdetect -lopencv_calib3d -lopencv_features2d -lopencv_highgui -lopencv_videoio -lopencv_imgcodecs -lopencv_flann -lopencv_xphoto -lopencv_photo -lopencv_imgproc -lopencv_core
