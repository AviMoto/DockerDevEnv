# Install Docker on Ubuntu
Tip: it's good idea to create volume for /var becuase all docker system will install and run on /var/lib/docker
## Uninstall fedora old version of docker
```bash
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```
## Install Docker CE (community edition) Repo and Engine
```bash
$ sudo apt-get update
$ sudo apt-get install \
      apt-transport-https \
      ca-certificates \
      curl \
      gnupg2 \
      software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce
```
If you want that docker will run on startup
```bash
$ systemctl enable docker
```

## Next
[Install Docker compose on linux](/docs/installation/linux_docker_compose.md "Install Docker compose on linux")