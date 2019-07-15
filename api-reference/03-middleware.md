---
title: Middleware
description: Below are the core middleware that get applied to API endpoints
---

## `api.client`

This checks if you are using a valid client token, or if you should be authenticated as a user

## `api.currency`

Set's the currency based on the `currency` passed through the request


## `api.detect_hub`

Detects whether the request is from the hub via a header.

## `api.customer_groups`

Sets the appropriate customer groups ready for the global scopes

## `api.channels`

Sets the channel based on the `X-CANDY-CHANNEL` header or `channel` being passed on the request

## `api.locale`

Sets the locale based on `accept-language`

## `api.tax`

Sets the tax for the system to use