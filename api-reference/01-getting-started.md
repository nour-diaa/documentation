---
title: Getting Started
description: Getting started with the GetCandy API
---

## Base URI

By default all endpoints (with the exception of OAuth routes) are prefixed with `/api/{version}` so, for example, if you take the products endpoint into consideration the full endpoint will look like:

```
/api/v1/products
```

## Authentication
**All non OAuth endpoints require an access token.** there are two levels of an access token, a client token and a user token.

### Client tokens
Client tokens do not belong to a specific user, they are typically what you would use to identify your consumer app to the API.

### User tokens
These tokens are directly linked to a user and should be used when you want to make API calls on a users behalf.

### Obtaining an access token
Under the hood GetCandy uses [Laravel Passport](https://laravel.com/docs/5.7/passport) to manage and issue access tokens, for full details on how to get an access token, refer to their documentation.