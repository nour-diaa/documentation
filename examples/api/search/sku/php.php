<?php

$skus = CandyClient::search()->sku([
    'sku' => 'ly-ra',
]);

foreach ($skus->getBody()['data'] as $result) {
    var_dump($result['sku']);
}
