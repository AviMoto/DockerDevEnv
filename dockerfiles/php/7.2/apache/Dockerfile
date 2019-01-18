FROM php:7.2.14-apache
ARG REMOTE_HOST
ENV REMOTE_HOST=${REMOTE_HOST:-172.17.0.1}

RUN apt update -y \
    && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libicu-dev \
        libxml++2.6-dev \
        libxslt-dev \
    && rm -r /var/lib/apt/lists/*

RUN docker-php-ext-install -j$(nproc) iconv pdo_mysql mysqli intl soap xml xmlrpc opcache mbstring zip xsl \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && pecl install xdebug-2.6.1 \
    && docker-php-ext-enable xdebug


RUN { \
            echo 'xdebug.remote_enable=1'; \
            echo 'xdebug.remote_autostart=1'; \
            echo 'xdebug.remote_host=172.17.0.1'; \
    } | tee -a /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && mv /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini
COPY docker-php-entrypoint /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-php-entrypoint