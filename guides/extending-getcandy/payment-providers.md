---
title: Extending Payment Providers
description: Adding your own payment providers is a cinch in GetCandy
---

Sometimes you need your own way of handling payments outside of what's offered in GetCandy. Payments are driver based and so it's easy to add your own, here's how:

```php
<?php

use GetCandy\Api\Core\Payments\PaymentResponse;
use GetCandy\Api\Core\Payments\Models\Transaction;
use GetCandy\Api\Core\Payments\Providers\AbstractProvider;

class Acme extends AbstractProvider
{
    /*
    * Used for identifying how an order was placed.
    */
    public function getName()
    {
        return 'Acme';
    }

    /**
    * Validate the incoming payment token
    */
    public function validate($token)
    {
        //.. Logic to determine validaty
        return true;
    }

    public function charge()
    {
        // You have access to $this->order
        $response = new PaymentResponse($success, 'A message based on success status');

        $transaction = new Transaction;
        $transaction->order()->associate($this->order);
        $transaction->merchant = 'MERCHANT_ID';
        $transaction->success = $success ? 'completed' : 'refused';
        $transaction->status = $success ? 'pending' : 'void';
        $transaction->provider = 'Acme';
        $transaction->driver = 'acme';

        if ($success) {
            $transaction->transaction_id = 'TRANSACTION1234';
            $transaction->card_type = 'Visa';
            $transaction->last_four = '1234';
            $transaction->amount = 1000; // Cents so 1000 = 10.00
        }

        $response->transaction($transaction);

        return $response;
    }

    /**
    *
    */
    public function refund($token, $amount, $description)
    {
        // .. Logic to do actual transaction
        $transaction = new Transaction;
        $transaction->order()->associate($this->order);
        $transaction->merchant = 'MERCHANT_ID';
        $transaction->provider = 'Acme';
        $transaction->driver = 'acme';
        $transaction->amount = -abs(1000);
        $transaction->card_type = 'Unknown';
        $transaction->last_four = '1234';
        $transaction->transaction_id = 'REFUND1234';
        $transaction->status = 'refunded';
        $transaction->success = true;
        $transaction->notes = $notes;
        $transaction->refund = true;
        $transaction->save();

        return $transaction;
    }
}
```

### What's going on here?

Lets break down what each method is doing:

#### `getName()`

Obvious one, just return the name of the provider, used for transactions and order type

#### `validate($token)`

Here you want to validate the incoming payment token and then return whether it was successful or not. If you return `false` the API will return a `422` HTTP response.

#### `charge()`

Here is where you should be triggering the actual charge with what ever payment provider you are using. You should be returning a `GetCandy\Api\Core\Payments\PaymentResponse`, the first argument is whether it was successful and the second is for any messages you want to return. If you send back an unsuccessful `PaymentResponse` then the transaction won't be completed in GetCandy and the `placed_at` column will not be populated.

A `PaymentResponse` should have a `Transaction` attached to it.

#### `refund($token, $amount, $description)`

Here you should be refunding a transaction with your chosen provider.

`$token` - This is the token which identifies the transaction with the payment provider
`$amount` - This is the amount to refund, it can be less but not more than the total transaction amount
`$description` - Any additional notes passed through from the controller

You should be returning a `Transaction`

## Registering your payment provider with GetCandy
Once you've got your payment provider set up, you just need to extend the current drivers so yours can be used. In your `AppServiceProvider` add the following to the boot method:

```php
$manager = $this->app(\GetCandy\Api\Core\Payments\PaymentContract::class);
$manager->extend('acme', function ($manager) {
    return new \App\Payments\Providers\Acme;
});
```

Then all you need to do is add your driver e.g. `acme` to the `drivers` column in `payment_types`