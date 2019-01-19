FROM php:7.1.26-fpm-alpine3.8
ARG REMOTE_HOST
ENV REMOTE_HOST=${REMOTE_HOST:-172.17.0.1}

RUN apk add --no-cache --virtual .persistent-deps \
    	libxml2 \
    	libzip
RUN set -xe \
	&& apk add --no-cache --virtual .build-deps \
		$PHPIZE_DEPS \
		postgresql-dev \
		libjpeg-turbo-dev \
		libpng-dev \
		freetype-dev \
		icu-dev \
		libxml2-dev \
		libzip-dev \
		libxslt-dev

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) \
    	iconv \
    	intl \
    	soap \
    	xml \
    	xmlrpc \
    	opcache \
    	pdo \
    	pdo_pgsql \
    	pgsql \
    	gd \
    	xsl \
    	zip \
    && pecl channel-update pecl.php.net \
    && pecl install  xdebug-2.6.1 \
    && docker-php-ext-enable  xdebug
RUN set -xe \
	&& runDeps="$( \
		scanelf --needed --nobanner --format '%n#p' --recursive /usr/local \
			| tr ',' '\n' \
			| sort -u \
			| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)" \
	&& apk add --no-cache --virtual .php-rundeps $runDeps \
	\
	&& apk del .build-deps \
	&& pecl update-channels \
	&& rm -rf /tmp/pear ~/.pearrc \
	&& { \
            echo 'xdebug.remote_enable=1'; \
            echo 'xdebug.remote_autostart=1'; \
            echo 'xdebug.remote_host=172.17.0.1'; \
    } | tee -a /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && mv /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini
COPY docker-php-entrypoint /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-php-entrypoint