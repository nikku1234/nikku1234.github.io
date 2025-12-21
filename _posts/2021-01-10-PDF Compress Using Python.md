---
layout: post
title: Compressing PDF Using Python
#gh-repo: 
#gh-badge: [star, fork, follow]
tags: [python,3.9,new features]
image: /assets/img/logos/python.png

---

## Compressing PDF Using Python Packages

- #### [pdfsizeopt](https://github.com/pts/pdfsizeopt)

- #### [pdfc](https://github.com/theeko74/pdfc)

- #### [pdf-compressor](https://github.com/johnfrancisgit/pdf-compressor)

- #### [pikepdf](https://pikepdf.readthedocs.io/en/latest/installation.html)



## 1. pdfsizeopt

**Installation instructions and usage on Linux**

There is no installer, you need to run some commands in the command line to download and install. pdfsizeopt is a command line only application, there is no GUI.

To install pdfsizeopt on a Linux system (with architecture i386 or amd64), open a terminal window and run these commands (without the leading `$'):

```
  $ mkdir ~/pdfsizeopt
  $ cd ~/pdfsizeopt
  $ wget -O pdfsizeopt_libexec_linux.tar.gz https://github.com/pts/pdfsizeopt/releases/download/2017-01-24/pdfsizeopt_libexec_linux-v3.tar.gz
  $ tar xzvf pdfsizeopt_libexec_linux.tar.gz
  $ rm -f    pdfsizeopt_libexec_linux.tar.gz
  $ wget -O pdfsizeopt.single https://raw.githubusercontent.com/pts/pdfsizeopt/master/pdfsizeopt.single
  $ chmod +x pdfsizeopt.single
  $ ln -s pdfsizeopt.single pdfsizeopt
```

To optimize a PDF, run the following command:

```
  ~/pdfsizeopt/pdfsizeopt input.pdf output.pdf
```

If the input PDF has many images or large images, pdfsizeopt can be very slow. You can speed it up by disabling pngout, the slowest image optimization method, like this:

```
  ~/pdfsizeopt/pdfsizeopt --use-pngout=no input.pdf output.pdf
```

pdfsizeopt creates lots of temporary files (psotmp.*) in the output directory, but it also cleans up after itself.

It's possible to optimize a PDF outside the current directory. To do that, specify the pathname (including the directory name) in the command-line.

Please note that the commands above download all dependencies (including Python and Ghostscript) as well. It's possible to install some of the dependencies with your package manager, but these steps are considered alternative and more complicated, and thus are not covered here.

Please note that pdfsizeopt works perfectly on any x86 and amd64 Linux system. There is no restriction on the libc, Linux distribution etc. because pdfsizeopt uses only its statically linked x86 executables, and it doesn't use any external commands (other than pdfsizeopt, pdfsizeopt.single and pdfsizeopt_libexec/*) on the system. pdfsizeopt also works perfectly on x86 FreeBSD systems with the Linux emulation layer enabled.

To avoid typing ~/pdfsizeopt/pdfsizeopt, add "$HOME/pdfsizeopt" to your PATH (probably in your ~/.bashrc), open a new terminal window, and the command pdfsizeopt will work from any directory.

You can also put pdfsizeopt to a directory other than ~/pdfsizeopt , as you like.

Additionally, you can install some extra image imptimizers (see more in the``Image optimizers'' section below):

```
  $ cd ~/pdfsizeopt
  $ wget -O pdfsizeopt_libexec_extraimgopt_linux-v3.tar.gz https://github.com/pts/pdfsizeopt/releases/download/2017-01-24/pdfsizeopt_libexec_extraimgopt_linux-v3.tar.gz
  $ tar xzvf pdfsizeopt_libexec_extraimgopt_linux-v3.tar.gz
  $ rm -f    pdfsizeopt_libexec_extraimgopt_linux-v3.tar.gz
```



**Installation instructions and usage with Docker on Linux and macOS**

There is no installer, you need to run some commands in the command line to download and install. pdfsizeopt is a command-line only application, there is no GUI.

To optimize a PDF, install Docker, and then run this command:

```
  docker run -v "$PWD:/workdir" -u "$(id -u):$(id -g)" --rm -it ptspts/pdfsizeopt pdfsizeopt input.pdf output.pdf
```

If the input PDF has many images or large images, pdfsizeopt can be very slow. You can speed it up by disabling pngout, the slowest image optimization method, like this:

```
  docker run -v "$PWD:/workdir" -u "$(id -u):$(id -g)" --rm -it ptspts/pdfsizeopt pdfsizeopt --use-pngout=no input.pdf output.pdf
```

pdfsizeopt creates lots of temporary files (psotmp.*) in the output directory, but it also cleans up after itself.

It's possible to optimize a PDF outside the current directory. To do that, specify the pathname (including the directory name) in the command-line.

To avoid typing a long command, run

```
(echo '#! /bin/sh'; echo 'exec docker run -v "$PWD:/workdir" -u "$(id -u):$(id -g)" --rm -it ptspts/pdfsizeopt pdfsizeopt "$@"') >pdfsizeopt && chmod 755 pdfsizeopt
```

, and then copy the pdfsizeopt script to your PATH, then open a new terminal
window, and now this command will also work to optimize a PDF:

```
  pdfsizeopt input.pdf output.pdf
```

Please note that the ptspts/pdfsizeopt Docker image is updated very rarely. To use a more up-to-date version, run these commands to download (without the leading `$'):

```
  wget -O pdfsizeopt.single https://raw.githubusercontent.com/pts/pdfsizeopt/master/pdfsizeopt.single
  chmod +x pdfsizeopt.single
```

Then run this command to optimize a PDF: 

```
 docker run -v "$PWD:/workdir" -u "$(id -u):$(id -g)" --rm -it ptspts/pdfsizeopt ./pdfsizeopt.single --use-pngout=no input.pdf output.pdf
```

If you want to have extra image optimizers included, use ptspts/pdfsizeopt-with-extraimgopt instead of ptspts/pdfsizeopt in the
commands above. Example:

```
docker run -v "$PWD:/workdir" -u "$(id -u):$(id -g)" --rm -it ptspts/pdfsizeopt-with-extraimgopt pdfsizeopt --use-image-optimizer=sam2p,jbig2,pngout,zopflipng,optipng,advpng,ECT input.pdf output.pdf
```

**Installation instructions and usage on Windows**

There is no installer, you need to run some commands in the command line (black Command Prompt window) to download and install. pdfsizeopt is a command-line only application, there is no GUI.

Create folder C:\pdfsizeopt, download
https://github.com/pts/pdfsizeopt/releases/download/2017-09-02w/pdfsizeopt_win32exec-v6.zip
, and extract its contents to the folder C:\pdfsizeopt, so that the file C:\pdfsizeopt\pdfsizeopt.exe exists.

Download
https://raw.githubusercontent.com/pts/pdfsizeopt/master/pdfsizeopt.single and save it to C:\pdfsizeopt, as C:\pdfsizeopt\pdfsizeopt.single .

To optimize a PDF, run the following command:

  C:\pdfsizeopt\pdfsizeopt input.pdf output.pdf

in the command line, which is a black Command Prompt window, you can start it by Start menu / Run / cmd.exe, or finding Command Prompt in the start menu.

(Press Tab to get filename completion while typing.)

Since you have to type the input filename as a full pathname, it's recommended to create a directory with a short name (e.g. C:\pdfs), and copy the input PDF there first.

If the input PDF has many images or large images, pdfsizeopt can be very slow. You can speed it up by disabling pngout, the slowest image optimization method, like this:

  C:\pdfsizeopt\pdfsizeopt --use-pngout=no input.pdf output.pdf

To avoid typing C:\pdfsizeopt\pdfsizeopt, add C:\pdfsizeopt to (the end of) the system PATH, open a new Command Prompt window, and the command `pdfsizeopt' will work from any directory.

Depending on your environment, filenames with accented characters may not work in the Windows version of pdfsizeopt. To
play it safe, make sure your input and output files have names with letters, numbers, underscore (_), dash (-), dot (.) and plus (+). The backslash (\) and the slash (/) are both OK as the directory separator.

Spaces in filenames and pathnames should work, but you need to put double quotes (") around the name.

Filenames with some punctuation characters (such as double quote ("), question mark (?) and asterisk (*)) and nonprintable characters (such as newline) will not work on Windows. This is because Windows doesn't support these characters ([\x00..\x1f\"*:<> |\x7f] in filenames at all, and it uses / and \\ as directory separator.

You can also put pdfsizeopt to a directory other than C:\pdfsizeopt , but it won't work if there is whitespace or there are accented characters in any of the folder names.

Please note that pdfsizeopt works perfectly in Wine (tested with wine-1.2 on Ubuntu Lucid and wine-1.6.2 on Ubuntu Trusty), but it's a bit slower than running it natively (as a Linux or Unix program).

**Installation instructions and usage on macOS**

There is no installer, you need to run some commands in the command line to download and install. pdfsizeopt is a command-line only application, there is no GUI.

To install pdfsizeopt on a macOS system (with architecture i386 or amd64), open a terminal window and run these commands (without the leading `$'):

```
 $ mkdir ~/pdfsizeopt
  $ cd ~/pdfsizeopt
  $ curl -L -o pdfsizeopt_libexec_darwin.tar.gz https://github.com/pts/pdfsizeopt/releases/download/2017-09-03d/pdfsizeopt_libexec_darwin-v1.tar.gz
  $ tar xzvf pdfsizeopt_libexec_darwin.tar.gz
  $ rm -f    pdfsizeopt_libexec_darwin.tar.gz
  $ curl -L -o pdfsizeopt.single https://raw.githubusercontent.com/pts/pdfsizeopt/master/pdfsizeopt.single
  $ chmod +x pdfsizeopt.single
  $ ln -s pdfsizeopt.single pdfsizeopt
```

Do a test optimization run, which exercises all dependencies of pdfsizeopt:

```
  $ curl -L -o deptest.pdf https://github.com/pts/pdfsizeopt/raw/master/deptest/deptest.pdf
  $ ~/pdfsizeopt/pdfsizeopt deptest.pdf
```

... and open (view) deptest.pdf and the corresponding optimized deptest.pso.pdf .

To optimize a PDF, run the following command:

```
  ~/pdfsizeopt/pdfsizeopt input.pdf output.pdf
```

If the input PDF has many images or large images, pdfsizeopt can be very slow. You can speed it up by disabling pngout, the slowest image optimization method, like this:

```
  ~/pdfsizeopt/pdfsizeopt --use-pngout=no input.pdf output.pdf
```

Also, if you have an 32-bit Mac, then the pngout bundled with pdfsizeopt won't work (because it needs a 64-bit Mac), so you have to force --use-pngout=no . See the section ``Image optimizers'' for alternatives of pngout.

pdfsizeopt creates lots of temporary files (psotmp.*) in the output directory, but it also cleans up after itself.

It's possible to optimize a PDF outside the current directory. To do that, specify the pathname (including the directory name) in the command-line.

Please note that the commands above download most dependencies (including Ghostscript, but excluding Python) as well. Everything should work as instructed above, out of the box. If you are experiencing problems, please report an issue on https://github.com/pts/pdfsizeopt/issues .

To avoid typing ~/pdfsizeopt/pdfsizeopt, add "$HOME/pdfsizeopt" to your PATH (probably in your ~/.bashrc), open a new terminal window, and the command pdfsizeopt will work from any directory.

You can also put pdfsizeopt to a directory other than ~/pdfsizeopt , as you like.



## 2. Pdfc -- PDF Compressor

Simple python script to compress PDF.

### Installation

- Install dependency Ghostscript. On MacOSX: `brew install ghostscript` On Windows: install binaries via [official website] (https://www.ghostscript.com/)
- Create a symbolic link if you want to run it everywhere in bash `ln -s pdf_creator.py pdfc`
- Add in PATH environment variable On MacOSX: `echo export=/absolute/path/of/the/folder/script/:$PATH >> ~/.bash_profile`

### Usage

```
pdfc [-o output_file_path] [-c number] input_file_path
```

Ex: `pdfc -o out.pdf in.pdf`

Output:

```
Compress PDF...
Compression by 65%.
Final file size is 1.4MB
Done.
```

### Options

- ```
  -c 
  ```

  or 

  ```
  --compress
  ```

   

  specifies 5 levels of compression, similar to standard pdf generator level:

  - 0: default
  - 1: prepress
  - 2: printer
  - 3: ebook
  - 4: screen

- `-o`or `--out` specifies the output file path. If not specified, input file will be erased.

- `-b`or `--backup` creates a backup of the original file in case no output is specified to avoid erasing the original file.



## 3. pdf-compressor

Compress PDF files with GUI (Ubuntu Linux)

Installing it:

1. Add the ppa

   sudo add-apt-repository ppa:jfswitz/released

2. Update repos

   sudo apt-get update

3. Install the program

   sudo apt-get install pdf-compressor

After installation, you can pdf-compressor directly through your desktop GUI. After a compression, the compressed file will appear next to the uncompressed pdf file with the new filename: <old_file_name>_compressed.pdf .

Only compress one file at a time.

Further Developing notes:

- This program was developed using the quickly framework. https://wiki.ubuntu.com/Quickly



## 4. pikepdf

### Installation

#### Basic installation

Most users on Linux, macOS or Windows with x64 systems should use `pip` to install pikepdf in their current Python environment (such as your project’s virtual environment).

```
pip install pikepdf
```

Use `pip install --user pikepdf` to install the package for the current user only. Use `pip install pikepdf` to install to a virtual environment.

**Linux users:** If you have an older version of `pip`, such as the one that ships with Ubuntu 18.04, this command will attempt to compile the project instead of installing the wheel. If you want to get the binary wheel, upgrade `pip` with:

```
wget https://bootstrap.pypa.io/get-pip.py && python3 get-pip.py
pip --version  # should be 20.0 or newer
pip install pikepdf
```

32- and 64-bit wheels are available for Windows, Linux and macOS. Binary wheels should work on most systems, i.e. Linux distributions 2010 and newer, macOS 10.11 and newer (for Homebrew), Windows 7 and newer, **provided a recent version of pip is used to install them**. The Linux wheels currently include copies of libqpdf, libjpeg, and zlib. The Windows wheels include libqpdf. This is to ensure that up-to-date, compatible copies of dependent libraries are included.

Currently we do not build wheels for architectures other than x86 and x64.

#### Debian, Ubuntu and other APT-based distributions

```
apt install pikepdf
```

#### Fedora

![Fedora Rawhide](https://repology.org/badge/version-for-repo/fedora_rawhide/python:pikepdf.svg)

```
dnf install python-pikepdf
```

#### Alpine Linux

![Alpine Linux Edge](https://repology.org/badge/version-for-repo/alpine_edge/python:pikepdf.svg)

```
apk add py3-pikepdf
```

#### Installing on FreeBSD

```
pkg install py37-pikepdf
```

To attempt a manual install, try something like:

```
pkg install python3 py37-lxml py37-pip py37-pybind11 qpdf
pip install --user pikepdf
```

This procedure is known to work on FreeBSD 11.3, 12.0, 12.1-RELEASE and 13.0-CURRENT. It has not been tested on other versions.

#### Building from source

#### **Requirements**

pikepdf requires:

- a C++14 compliant compiler - GCC (5 and up), clang (3.3 and up), MSVC (2015 or newer)
- [pybind11](https://github.com/pybind/pybind11)
- libqpdf 10.0.3 or higher from the [QPDF](https://github.com/qpdf/qpdf) project.

On Linux the library and headers for libqpdf must be installed because pikepdf compiles code against it and links to it.

Check [Repology for QPDF](https://repology.org/project/qpdf/badges) to see if a recent version of QPDF is available for your platform. Otherwise you must [build QPDF from source](https://github.com/qpdf/qpdf/blob/master/INSTALL). (Consider using the binary wheels, which bundle the required version of libqpdf.)

**Compiling with GCC or Clang**

- clone this repository
- install libjpeg, zlib and libqpdf on your platform, including headers
- `pip install .`

Note

pikepdf should be built with the same compiler and linker as libqpdf; to be precise both **must**use the same C++ ABI. On some platforms, setup.py may not pick the correct compiler so one may need to set environment variables `CC` and `CXX` to redirect it. If the wrong compiler is selected, `import pikepdf._qpdf` will throw an `ImportError` about a missing symbol.

**On Windows (requires Visual Studio 2015)**

pikepdf requires a C++14 compliant compiler (i.e. Visual Studio 2015 on Windows). See our continuous integration build script in `.appveyor.yml` for detailed and current instructions. Or use the wheels which save this pain.

These instructions require the precompiled binary `qpdf.dll`. See the QPDF documentation if you also need to build this DLL from source. Both should be built with the same compiler. You may not mix and match MinGW and Visual C++ for example.

Running a regular `pip install` command will detect the version of the compiler used to build Python and attempt to build the extension with it. We must force the use of Visual Studio 2015.

1. Clone this repository.

2. In a command prompt, run:

   > ```
   > %VS140COMNTOOLS%\..\..\VC\vcvarsall.bat" x64
   > set DISTUTILS_USE_SDK=1
   > set MSSdk=1
   > ```

3. Download qpdf-10.0.3-bin-msvc64.zip from the [QPDF releases page](https://github.com/qpdf/qpdf/releases).

4. Extract `bin\*.dll` (all the DLLs, both QPDF’s and the Microsoft Visual C++ Runtime library) from the zip file above, and copy it to the `src/pikepdf` folder in the repository.

5. Run `pip install .` in the root directory of the repository.

Note

The user compiling `pikepdf` to must have registry editing rights on the machine to be able to run the `vcvarsall.bat` script.

**Building against a QPDF source tree**

Follow these steps to build pikepdf against a different version of QPDF, rather than the one provided with your operating system. This may be useful if you need a more recent version of QPDF than your operating system package manager provides, and you do not want to use Python wheels.

- Set the environment variable `QPDF_SOURCE_TREE` to the location of the QPDF source tree.
- Build QPDF, by running `make`. Refer to the QPDF installation instructions for further options and details.
- On Linux, modify `LD_LIBRARY_PATH`, prepending the path where the QPDF build produces `libqpdfXX.so`. This might be something like `$QPDF_SOURCE_TREE/.build/libs/libqpdfXX.so`. On macOS, locate the equivalent variable is `DYLD_LIBRARY_PATH`. On Windows, no action is needed. Generally, what you are doing here is telling the runtime dynamic linker to use the custom compiled version of QPDF instead of the system version.
- Build pikepdf. On Windows, locate the QPDF .dll files and copy them into the folder alongside the file named `_qpdf*.dll`.

Note that the Python wheels for pikepdf currently compile their own version of QPDF and several of its dependencies to ensure the wheels have the latest version. You can also refer to the Azure Pipelines CI YAML files for build steps.

**Building against a custom install of QPDF to /usr/local/lib**

If you have previously installed a QPDF from source to `/usr/local/lib` on a POSIX platform, and you try to build pikepdf from source, it will prefer the operating system version of QPDF installed at `/usr/lib`. Since pikepdf strongly prefers recent versions of QPDF, you may want to use a more current version.

From a Git checkout of the pikepdf source tree, run:

```
env LDFLAGS='-L/usr/local/lib' CFLAGS='-I/usr/local/include/qpdf' pip install .
```

#### Building the documentation

Documentation is generated using Sphinx and you are currently reading it. To regenerate it:

```
pip install -r requirements/docs.txt
cd docs
make html
```