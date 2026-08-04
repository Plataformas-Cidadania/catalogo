FROM node:16-bullseye AS assets

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run production



FROM php:8.1-apache

RUN apt-get update && apt-get install -y \
        git \
        unzip \
        zip \
        curl \
        libzip-dev \
        libpng-dev \
        libjpeg62-turbo-dev \
        libfreetype6-dev \
        libicu-dev \
        libxml2-dev \
        libonig-dev \
        libpq-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install \
        pdo \
        pdo_mysql \
        bcmath \
        exif \
        gd \
        intl \
        zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html


COPY composer.json composer.lock ./

RUN composer install \
        --ignore-platform-reqs \
        --no-dev \
        --optimize-autoloader \
        --no-interaction


COPY . .


COPY --from=assets /app/public ./public


RUN mkdir -p storage/framework/{cache,sessions,views} \
    && chown -R www-data:www-data storage bootstrap/cache


ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf \
    /etc/apache2/conf-available/*.conf

EXPOSE 80

CMD ["apache2-foreground"]