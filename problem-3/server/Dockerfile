FROM php:7.1.5-apache
MAINTAINER Serge van Ginderachter <serge@vanginderachter.be>

RUN apt-get update && apt-get upgrade -y

# https://github.com/docker-library/php/issues/105#issuecomment-111552946
RUN apt-get update && apt-get install -y git-core libmagickwand-dev phpunit php5-xdebug --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN pecl install imagick
RUN echo 'extension=imagick.so' > /usr/local/etc/php/conf.d/ext-imagick.ini

RUN curl -sS https://getcomposer.org/installer | php \
		&& mv composer.phar /usr/local/bin/ \
		&& ln -s /usr/local/bin/composer.phar /usr/local/bin/composer

COPY public/ /var/www/html/
COPY . /var/www/

WORKDIR /var/www/
RUN composer install --prefer-source --no-interaction

