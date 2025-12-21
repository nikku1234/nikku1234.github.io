---
layout: post
title: Remote SSH Error with VSCode
#gh-repo:
#gh-badge: [star, fork, follow]
tags: [self]
image: /assets/img/vs.png
---

### **Warning: no access to tty vscode**

We all would have, come across this error while connecting to our remote system using ssh in VSCode, this is because the remote system doesn't, have bash as the default. For me when I faced this error, the second solution worked.

**Solution 1:**

As a workaround one can setup the ssh configuration (.ssh/config file) as below. Note that you should change the HOSTNAME and USERNAME accordingly.

Host ALIAS
HostName HOSTNAME
User USERNAME
RemoteCommand bash -l

After the successful ssh, 'bash -l' command will be run to give an interactive bash shell.



**Solution 2:**

In VSCode, Open command palette, run "Remote-SSH: Settings", then config "Remote.SSH: Remote Server Listen On Socket" to true. This did the trick for me.

