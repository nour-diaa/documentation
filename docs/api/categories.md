# Categories

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus mauris sed volutpat egestas. Sed vitae ipsum diam. Donec hendrerit mauris non viverra elementum. Maecenas ultricies fringilla lorem non placerat.

## /categories

:::: tabs

::: tab GET

To create a new plugin license, create an authenticated POST request to `/v1/plugin-licenses`.

### Request

The request must have a JSON body with the following parameters:

| Parameter        | Type           | Required  |Description  |
| ---------------- |--------------| -----:| -----|
| id               | Hashed ID     |  Yes |  |
| name      | String      |    |  |
| position | Integer      |    |  |

<CodeSwitcher :languages="{json:'API',php:'PHP',js:'JS'}">
<template v-slot:php>

```php
Candy::categories()->get();
```

</template>
<template v-slot:js>

```js
let candy = new CandyClient;
candy.categories.get();
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

### Response

Product Model

:::
::: tab POST

To create a new plugin license, create an authenticated POST request to `/v1/plugin-licenses`.

The request must have a JSON body with the following parameters:

| Parameter        | Type           | Required  |Description  |
| ---------------- |--------------| -----:| -----|
| id               | Hashed ID     |  Yes |  |
| name      | String      |    |  |
| position | Integer      |    |  |

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

:::
::::

## /categories/:id

:::: tabs
::: tab GET

To create a new plugin license, create an authenticated POST request to `/v1/plugin-licenses`.

The request must have a JSON body with the following parameters:

| Parameter        | Type           | Required  |Description  |
| ---------------- |--------------| -----:| -----|
| id               | Hashed ID     |  Yes |  |
| name      | String      |    |  |
| position | Integer      |    |  |

<CodeSwitcher :languages="{json:'API',php:'PHP',js:'JS'}">
<template v-slot:php>

```php
$this->products()->save('stuff');
$this->products()->whoop();
```

</template>
<template v-slot:js>

```js
let candy = new CandyClient;
candy.categories.get();
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

:::
::: tab POST

To create a new plugin license, create an authenticated POST request to `/v1/plugin-licenses`.

The request must have a JSON body with the following parameters:

| Parameter        | Type           | Required  |Description  |
| ---------------- |--------------| -----:| -----|
| id               | Hashed ID     |  Yes |  |
| name      | String      |    |  |
| position | Integer      |    |  |

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

:::
::::

## /categories/:id/customer-groups


### GET
To create a new plugin license, create an authenticated POST request to `/v1/plugin-licenses`.

The request must have a JSON body with the following parameters:

| Parameter        | Type           | Required  |Description  |
| ---------------- |--------------| -----:| -----|
| id               | Hashed ID     |  Yes |  |
| name      | String      |    |  |
| position | Integer      |    |  |

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
