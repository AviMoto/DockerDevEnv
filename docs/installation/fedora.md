# Install Docker on Fedora
This instruction was test on Fedora 29
Tip: it's good idea to create volume for /var becuase all docker system will install and run on /var/lib/docker
## Uninstall fedora old version of docker
```bash
$ sudo dnf remove docker \  
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```
## Install Docker CE (community edition) Repo and Engine
```bash
$ sudo dnf -y install dnf-plugins-core
$ sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
$ sudo dnf install docker-ce
$ sudo systemctl start docker
```
If you want that docker will run on startup
```bash
$ systemctl enable docker
```

## Next
[Install Docker compose on linux](/linux_docker_compose.md "Install Docker compose on linux")