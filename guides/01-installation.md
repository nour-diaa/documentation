---
title: Installation
description: 'The GetCandy API a REST API for your online store, making it easy to consume with any front end imaginable'
tocs:
    "API Installation": api_install
    "Hub Installation": hub_install
---

### Requirements

- Laravel 5.7
- Elasticsearch 6.*

### Install via composer

For a new project, we need to pull in the correct version of Laravel

```bash
$ composer create-project laravel/laravel="5.7.*" my-webstore
```

## API Installation <a name="api_install"></a>

Once we're in the project root, install via composer.

```bash
$ composer require getcandy/candy-api
```

Once done, publish the config.
```bash
$ php artisan vendor:publish --tag=config
```

### Migrations and Traits
Before we can use GetCandy we need to add the **HasCandy** trait to our user…


```php
<?
  namespace App;

  use GetCandy\Api\Core\Traits\HasCandy;

  class User extends Authenticatable
  {
      use HasCandy;
      // ...
  }
```

Now we are ready to install, run the install command:
```bash
php artisan candy:install
```

![Candy Install](/images/get-candy-install.gif)

### Initialise the search index

```bash
php artisan candy:search:index
```

This will create the search index and get everything set up so we can start adding/searching products.

### Authentication
GetCandy uses Passport to deal with authentication, we just need to tell Laravel we want to use it for API authentication, so in `config/auth.php` the guards should look like this:

```php
'guards' => [
  'web' => [
    'driver' => 'session',
    'provider' => 'users',
  ],
  'api' => [
    'driver' => 'passport',
    'provider' => 'users',
  ],
],
```

### Link up storage
Make sure that you link up your storage directory if you are using the default asset storage.

```bash
$ php artisan storage:link
```

---
## Hub Installation <a name="hub_install"></a>

Make sure you're in the project root and run

```bash
$ composer require getcandy/candy-hub
```

Once done, publish the assets

```bash
$ php artisan vendor:publish --tag=public
```

That'be able to visit the hub by going to `/hub` and log in, there you will see the dashboard

![GetCandy Hub](/images/screenshots/hub-dashboard.jpg)
