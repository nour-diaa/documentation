<?php

$response = CandyClient::Categories($id)->Put([
    'attributes' => [
        'name' => [
            'webstore' => [
                'en' => 'A Category Name'
            ]
        ]
    ],
    'customer_groups' => [
        'data' => [
            'visible' => true,
            'purchasable' => true,
        ],
    ],
    'channels' => [
        'data' => [
            'published_at' => '2019-05-16', // Can be empty
        ],
    ],
]);
