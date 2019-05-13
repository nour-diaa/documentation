---
title: Tips & Tricks
description: Helpful tips and information for working with the API
---

## Translations

By default the API will give back a response in the language configured, you can override this by specifying the `Accept-Language` header. This should be the same as the `lang` column in the `languages` table.

## Translated response vs Full response

There might be times where you want to get the full response, rather than a translated one, just pass `full_response` on any endpoint that handles attributes and you'll get a response with all the attribute data.