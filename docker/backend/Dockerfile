FROM php:8.2-fpm
WORKDIR /var/www/app

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
COPY php.ini /usr/local/etc/php/php.ini

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone 
RUN dpkg-reconfigure -f noninteractive tzdata

RUN docker-php-ext-install pdo_mysql

