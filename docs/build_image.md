# Build your own image for development
In Step 3 we understand that the official php image is not enough for running moodle, So lets build our webserver image
1. we need to create Dockerfile and as good start we will use the official php image. Lets see our Dockerfile
1. after we write our Dockerfile we need to build an image, we will use the docker build command:
    ```bash
    $ docker build -t sysbind/php:7.2.14-apache-dev-demo ./dockerfiles/php/7.2/apache/ 
    ```
1. after the build was finish we can publish our dev image in <https://dockerhub.com> by push the image
    ```bash
    $ docker push sysbind/php:7.2.14-apache-dev-dem
    ```
1. now we only need to update our webserver image in the docker compose file and run it again

# Next
I need to test two moodle env from different years an different env, So lets jump to step 5