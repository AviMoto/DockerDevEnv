# Build Development Environment with Docker Compose
## Running latest Release of Moodle Version on latest PHP,MariaDB Supported to prepare for next year
1. lets start build our First docker compose file, docker compose file is set of dockers deffined as services and use 
the env deffind in docker-compose yaml file
1. first we need to create docker-compose.yaml file, for this example we already make [one](docker-compose.yaml 
"docker-compose yaml file")
    ```bash
    $ docker-compose -f docker-compose.yaml up
    ```
1. lets add to our hosts file the domain we use to test this env, add to the end of the line how start with 127.0.0.1 
the domain moodledev.test
1. browse to moodledev.test, we will see the Moodle installation wizard. lets fill the the forms
    
    ![Site Details](/docs/images/mooodle_install_site_details.png "Moodle installation wizard site details form")
    
    ![Moodle DB details](/docs/images/moodle_install_db_details.png "Moodle installation wizard DB details from")
    
    Pay attention that in Database host we use 'db' as the name we gave to database service in the docker-compose.yaml 
    file
    
    ![PHP extention problem](/docs/images/moodle_install_php_ext_problem.png "Moodle php extension pronlem")
    
    We have problem to go on with the installation because we dosen't have to required php extension
    
## Next
We need to create our own image of webserver that include all required php extension, let's go to step 4   