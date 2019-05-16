---
title: Asset
description: "GetCandy\\Api\\Core\\Assets\\Models\\Asset"
github: https://github.com/getcandy/candy-api/blob/master/src/Core/Assets/Models/Asset.php
---

## Default Attributes

- `id` - The encoded ID
- `title` - The title
- `caption` - The asset caption
- `kind` - The kind of asset e.g. `image`
- `external` - Whether this was added from an external source
- `position` - The position relative to the parent
- `primary` - If this is the primary asset
- `url` - The public consumable URL to the asset

> These next attributes only apply to non external assets i.e Uploaded through a form

- `sub_kind` - The type of asset e.g. `jpg`
- `extension` - The file extension
- `original_filename` - The orginal filename, before it's hashed
- `size` - The filesize in bytes
- `width` - The width in pixels
- `height` - The height in pixels

Whatever custom attributes are assigned to the product are also included in the output.

**Example**

```javascript
{
  "data": {
    "id": "86qmdx39",
    "title": "wrVaUyuqoQMfKRmaw8orGSmuJ77H8z2eBpypXVpB.png",
    "caption": null,
    "kind": "image",
    "external": false,
    "thumbnail": null,
    "position": 4,
    "primary": false,
    "sub_kind": "png",
    "extension": "png",
    "original_filename": "logo.png",
    "size": 25148,
    "width": 476,
    "height": 104,
    "url": "https:\/\/my-webstore.test\/storage\/products\/2019\/05\/16\/wrVaUyuqoQMfKRmaw8orGSmuJ77H8z2eBpypXVpB.png",
    "tags": {
      "data": []
    }
  },
  "meta": {
    "lang": "en"
  }
}
```

### Available includes


- `transforms`
- `tags`