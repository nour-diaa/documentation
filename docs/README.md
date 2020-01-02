---
title: Blogging Like a Hacker
lang: en-GB
---
# Hello VuePress

[Click for config](/config.html)

[Click for stuff](/stuff/)

::: warning
This is a warning
:::


<CodeSwitcher :languages="{php:'PHP',json:'Rest API'}">
<template v-slot:php>

```php
$this->products()->save('stuff');
$this->products()->whoop();
```

</template>
<template v-slot:json>

```json
{
	stuff: 'glenn'
}
```

</template>
</CodeSwitcher>


sss