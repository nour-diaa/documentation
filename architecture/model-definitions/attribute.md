---
title: Attribute
description: "GetCandy\\Api\\Core\\Attributes\\Models\\Attribute"
github: https://github.com/getcandy/candy-api/blob/master/src/Core/Attributes/Models/Attribute.php
---

## Default Attributes

- `id`
- `name`
- `handle`
- `position`
- `filterable`
- `scopeable`
- `translatable`
- `variant`
- `localised`
- `type`
- `required`
- `lookups` - check example for format
- `system`


Whatever custom attributes are assigned to the product are also included in the output.

**Example**

```javascript
{
  "data": {
      "id": "dnj4zky5",
      "name": {
        "en": "Name",
      },
      "handle": "name",
      "position": "1",
      "filterable": false,
      "scopeable": true,
      "translatable": true,
      "variant": false,
      "searchable": true,
      "localised": true,
      "type": "text",
      "required": true,
      "lookups": [  // String or object notation is fine.
        "Label & Value One",
        {
          "label": "Label Two",
          "value": "Value Two",
        },
      ],
      "system": false
  }
}
```

### Available includes


- `group`