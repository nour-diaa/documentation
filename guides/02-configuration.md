---
title: Configuration
description: Customize your storefront
tocs:
    hub_access: hub_access
    discounters: discounters
    orders:
        mailers: mailers
        table_columns: table_columns
        statuses: statuses
        statuses.options: statues.options
        payments: payments
---

While we try and keep descriptive comments in the default documentation, below is a more thorough outline of what's available.

Most configuration resides in `config/getcandy.php` unless specified otherwise.

<alert-panel level="warning" class="my-4">
    <div slot="title">
        The hub may get it's own config file at some point.
    </div>
</alert-panel>

## `hub_access` <a name="hub_access"></a>

Define the user roles which should have access to the hub.

Expects: `array`

**Example**

```php
'hub_access' => ['admin']
```

## `discounters` <a name="discounters"></a>

Define which indexers should be available in your store

Expects: `array`

**Example**
```php
'discounters' => [
    'coupon' => GetCandy\Api\Core\Discounts\Criteria\Coupon::class,
    'customer-groups' => GetCandy\Api\Core\Discounts\Criteria\CustomerGroup::class,
    'products' => GetCandy\Api\Core\Discounts\Criteria\Products::class,
    'users' => GetCandy\Api\Core\Discounts\Criteria\Users::class,
],
```

## `orders` <a name="discounters"></a>

All configuration below should live within the `orders` array.

### `mailers` <a name="mailers"></a>

Here you can define mailers for the system, these will be send during various events

Expects: `array`

**Example**

```php
'mailers' => [
    'payment-processing' => App\Mail\OrderConfirmation::class // Relates to statuses
]
```

<alert-panel level="info">
    <div slot="title">
        Each key in the array relates to the order statuses defined in the config.
    </div>
</alert-panel>

### `table_columns` <a name="table_columns"></a>

Define the columns to be shown on the orders listing page in the Admin Hub.

Expects: `array`

**Example**
```php
'table_columns' => [
    'name', 'reference', 'account_no', 'contact_email', 'account', 'order_total', 'delivery_total', 'date',
],
```

### `statuses` <a name="statuses"></a>

Set order statuses to be triggered within GetCandy's internal event system.

Expects: `array`

**Example**

```php
'statuses' => [
    'pending' => 'payment-processing',
    'paid' => 'payment-received',
    'dispatched' => 'dispatched',
];
```

**What's happening?**

At various points in an orders lifetime it can be `pending` , `paid` or `dispatched`, here you're basically saying "when the order status is `payment-processing` it's a pending order and GetCandy will know how to handle the events. (think back to the mailers)

### `statuses.options` <a name="statuses.options"></a>

These are your custom order statuses, they can be whatever you want, just make
sure that you map the appropriate statuses above.

Expects: `array`

**Example**
```php
'options' => [
    'failed' => [
        'label' => 'Failed',
        'color' => '#e4002b',
        'favourite' => true, // This will show as a tab in the hub
    ],
    'payment-received' => [
        'label' => 'Payment Received',
        'color' => '#6a67ce',
    ],
    'awaiting-payment' => [
        'label' => 'Awaiting Payment',
        'color' => '#848a8c',
    ],
    'payment-processing' => [
        'label' => 'Payment Processing',
        'color' => '#b84592',
    ],
],
```

## `payments` <a name="payments"></a>

Define which payment providers your store will offer

Expects: `array`

**Example**

```php
'gateway' => 'braintree',
'environment' => env('PAYMENT_ENV'),
'providers' => [
    'offline' => GetCandy\Api\Core\Payments\Providers\Offline::class,
    'braintree' => GetCandy\Api\Core\Payments\Providers\Braintree::class,
    'sagepay' => GetCandy\Api\Core\Payments\Providers\SagePay::class,
],
```

<!-- <alert-panel level="info">
    <div slot="title">
        Check out the payments section under guides for more information about these.
    </div>
</alert-panel> -->
