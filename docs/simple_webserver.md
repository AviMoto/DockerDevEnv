# Run Our first simple webserver
## Using docker command
### Nginx
1. We will start by run our first nginx container and connect its port to our host ports by providing -p flags
   ```bash
   $ docker run -p 80:80 -p 443:443 --name simple_nginx nginx
   ```
1. Brows to localhost and we will get the welcome to nginx page
1. But what if we don't want the latest version of nginx or we want it with different OS libs, to do so
we can brows to <https://hub.docker.com/> and search for the official nginx container repo. We can find there a 
different versions of nginx that create on different OS libs for example: version 1.14 or 1.15 run on alpine.
To use different version of nginx we can add tag to our docker run command in the image name
    ```bash
    $ docker stop simple_nginx
    $ docker run -p 80:80 -p 443:443 -name nginx_1_14_alpine nginx:1.14-alpine
    ```
    if we will check in the browser network the reply header we will see that now we get response from different version 
    of nginx, also pay attantion how small is the container image against running the same web server on VM with all OS
    is ~5MB for nginx:1.14-alpine against 2GB for minimal VM and the nginx use allocate only the resource it's need on 
    not resources for another OS running nginx.
1. Actually using tag name with specific version is the best practice when using containers because we don't want
to get new version in suprise (It's happen when we use 'latest' tag or without tag).
1. another thing is to use only official repo or images build by your own
1. To stop our container we can run
    ```bash
    $ docker stop nginx_1_14_alpine
    ```
    and for run it again 
    ```bash
    $ docker start nginx_1_14_alpine
    ```
### Apache
1. Like in the example above we can run apache web server
    ```bash
    $ docker run -p 80:80 -p 443:443 --name apache httpd:2.4.37-alpine
    ```

## Next
So we see how easy it switch between versions or type of services with out the need for special resources, but we still 
not start to develop and what about the all system (DB, PHP, cache etc..)

Change to branch Step3-Build_Containerized_env and go to (Run Dev Env with docker compose)[docs/first_dev_env.md]