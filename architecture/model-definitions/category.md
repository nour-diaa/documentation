---
title: Category
description: "GetCandy\\Api\\Core\\Categories\\Models\\Category"
github: https://github.com/getcandy/candy-api/blob/master/src/Core/Categories/Models/Category.php
---

## Default Attributes

- `id` - The encoded ID
- `sort` - The sort order for products
- `products_count` - The number of products associated to the category
- `children_count` - The number of children the category has

Whatever custom attributes are assigned to the product are also included in the output.

**Example**

```javascript
{
    "id": "wz6d39dj",
    "sort": "min_price:asc",
    "products_count": 8,
    "children_count": 6,
    "name": "Some Category",
    // Any more custom attributes
}
```

### Available includes

- `children`
- `channels`
- `ancestors`
- `routes`
- `layout`
- `assets`
- `attributes`
- `routes`
- `customer_groups`
- `products`