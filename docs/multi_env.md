# Multi Year Dev
1. So we need to Develop multi moodle instances plugin between two years one run moodle 3.6 like in the step before and 
the second will run current env use Moodle 3.5 and use Nginx, php-fpm and postgresql
1. For this implementation we need to make some changes in our docker compose file and also build php-fpm image that meet 
the Moodle requirements. first we will create a new docker file and build php-fpm image
    ```bash
    $ docker build -t sysbind/php:7.1.26-fpm-dev-demo ./dockerfiles/php/7.1/php-fpm/
    ```
1. change the docker-compose.yaml file and add loadbalancer and nginx,php-fpm and postgresql services
