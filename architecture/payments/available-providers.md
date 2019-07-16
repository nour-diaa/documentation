---
title: Payment Providers
description: Available payment providers
---

When making Payments in GetCandy, you should assign each `payment_types` a driver in the database.

All config should be added to `config/services.php`

## Braintree

**Driver:** `braintree`

```php
'braintree' => [
    'key' => env('BRAINTREE_KEY'),
    'secret' => env('BRAINTREE_SECRET'),
    '3D_secure' => env('3D_SECURE', false),
    'merchant_id' => env('BRAINTREE_MERCHANT'),
],
```

## SagePay

**Driver:** `sagepay`

```php
'sagepay' => [
    'vendor' => env('SAGEPAY_VENDOR'),
    'key' => env('SAGEPAY_KEY'),
    'password' => env('SAGEPAY_PASSWORD'),
],
```

## PayPal

**Driver:** `paypal`


```php
'paypal' => [
    'live' => [
        'client_id' => env('PAYPAL_LIVE_CLIENT_ID'),
        'client_secret' => env('PAYPAL_LIVE_CLIENT_SECRET'),
    ],
    'sandbox' => [
        'client_id' => env('PAYPAL_SANDBOX_CLIENT_ID'),
        'client_secret' => env('PAYPAL_SANDBOX_CLIENT_SECRET'),
    ],
    'settings' => [
        'mode' => env('PAYPAL_ENV'),
    ]
],
```

The reason we encourage adding both live and sandbox environments is really just for ease of use when using things like env variables in your front end. For example:

```bash
MIX_PAYPAL_LIVE_CLIENT_ID="${PAYPAL_LIVE_CLIENT_ID}"
MIX_PAYPAL_SANDBOX_CLIENT_ID="${PAYPAL_SANDBOX_CLIENT_ID}"
```

Here we're assigning both the sandbox and the live client ID's to mix variables for the front end, then, if we was using the javascript SDK we could do something like this:

```javascript
paypal.Button.render({
    env: env,
    client: {
        sandbox: process.env.MIX_PAYPAL_SANDBOX_CLIENT_ID,
        production: process.env.MIX_PAYPAL_LIVE_CLIENT_ID,
    },
}, '#paypal-button')
```

We don't have to keep compiling out our JS for the mix env variables nor do we have to worry about deploying the sandbox credentials in production.


