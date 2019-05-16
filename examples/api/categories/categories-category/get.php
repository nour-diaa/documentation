<?php

$response = CandyClient::Categories()->get($id);

if ($response->failed()) {
    abort(404);
}

echo $response->getBody()->name;
