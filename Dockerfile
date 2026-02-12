FROM php:8.3-apache

# Enable Apache rewrite module
RUN a2enmod rewrite

# Set document root to the project directory
ENV APACHE_DOCUMENT_ROOT=/var/www/html

# Apache config: serve index.php by default, allow .htaccess overrides
RUN sed -i 's|/var/www/html|${APACHE_DOCUMENT_ROOT}|g' \
    /etc/apache2/sites-available/000-default.conf && \
    sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' \
    /etc/apache2/apache2.conf

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy project files
COPY . /var/www/html/

# Install PHP dependencies
WORKDIR /var/www/html
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
