# Prerequisites

Assumption: you have docker and docker-compose installed on your local system.

checkout this repository and add this info to the localhost line in your /etc/hosts file:
```
127.0.0.1 (...) problem3.local api.local
```

This was tested on a Linux host. Should work on a mac, but that was not
verified.


# Overview

Updated or new files:

* problem-3/SOLUTIONS.md
* problem-3/certs/api.local.crt
* problem-3/certs/api.local.key
* problem-3/certs/problem3.local.crt
* problem-3/certs/problem3.local.key
* problem-3/client/Dockerfile
* problem-3/client/webpack.config.js
* problem-3/docker-compose.yml
* problem-3/server/Dockerfile
* problem-3/server/public/index.php


# Bring up the environment

cd into the freshly checked out repo, change to the `problem3 branch, then
proceed to bring the environment up:
```bash
git checkout problem3
cd problem-3
docker-compose up
```
This launches 5 containers:

* nginx reverse proxy: does ssl/tls termination and proxies the frontend and
  the backend via https://problem3.local and https://api.local
* frontend: the node app
* backend: the php application, including imagick, composer, phpunit and
  php5-xdebug
* redis: available to the backend app on hostname 'redis'
* mysql: available to the backend app on hostname 'mysql'

# Access the applications

Browse to https://problem3.local and/or https://api.local

Given the certificates are obviously self signed, please accept them as an
exception and proceed to the sites.


# Run tests on backend

```bash
docker exec $(docker ps | grep problem3_backend | awk '{print $1}') phpunit
```
(which shows an error in the test code: `PHP Parse error:  syntax error,
unexpected '?' in /var/www/vendor/phpunit/phpunit/src/Framework/TestCase.php on
line 845`)


# Improvements

in `problem-3/server/public/index.php` I replaced the hard-coded connection
info for mysql and redis by environment vars, which are now defined in the
docker-compose file.


# Suggestions

Do not log locally in the container. In current state, the apache web server
has no permission on the file system to write to log.txt, and those logs
would not be saved properly, as that log file would be lost when the container
exits.


