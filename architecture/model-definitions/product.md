---
title: Product
description: "GetCandy\\Api\\Core\\Products\\Models\\Product"
github: https://github.com/getcandy/candy-api/blob/master/src/Core/Products/Models/Product.php
---

## Default Attributes

- `id` - The encoded ID

Whatever custom attributes are assigned to the product are also included in the output.

**Example**

```javascript
{
  "data": {
    "id": "lnrxvznx",
    "brand": "Jolly Rancher",
    "name": "Jolly Ranchers Assorted Flavours Hard Candy",
    "page_title": "The sweetest Candy in the Galaxy",
    "product_information": "A piece of Candy"
}
```

### Available includes


- `attributes`
- `assets`
- `family`
- `routes`
- `channels`
- `firstVariant`
- `variants`
- `categories`
- `discounts`
- `collections`
- `associations`
- `customerGroups`