<?php

$results = CandyClient::Products()->search([
    'includes' => ['first_variant'],
    'page' => 1,
    'per_page' => 50,
    'type' => 'product',
    'sort' => 'sku:asc',
    'keywords' => 'Pops',
    'brand' => ['Nestle', 'Kelloggs']
]);
