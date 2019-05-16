<?php

$response = CandyClient::Categories()->get([
    'tree' => true,
    'depth' => 1
]);

foreach ($response->getBody() as $category) {
    echo $category->name;
}
