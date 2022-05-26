<p align="center">
<img width="400" src="https://raw.githubusercontent.com/shinokada/svelte-materialdesign-icons/blob/main/static/images/materialdesign1.png" />
</p>

# Svelte-Materialdesign-Icons

[![npm version](https://badgen.net/npm/v/svelte-materialdesign-icons)](https://www.npmjs.com/package/svelte-materialdesign-icons)
[![license](https://badgen.net/npm/license/svelte-materialdesign-icons)](https://github.com/shinokada/svelte-materialdesign-icons/blob/main/LICENSE)

6980+ Material Design SVG icon components for Svelte. Svelte-Materialdesign-Icons support major CSS frameworks using the `class` props.

## Icon name list

[Icon list](https://github.com/shinokada/svelte-materialdesign-icons/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-materialdesign-icons
```

## Usages

In a svelte file:

```html
<script>
	import {
		Adjust, ArrowUpBoldOutline, Bucket, Card, ChatPlus, DataMatrix 
	} from 'svelte-awesome-icons';
</script>

<Adjust />
<ArrowUpBoldOutline />
<Bucket />
<Card />
<ChatPlus />
<DataMatrix />
```

## Size

Use the `size` prop to change the size of icons.

```html
<Adjust size="40" />
<ArrowUpBoldOutline size="50" />
<Bucket size="60" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Card color="#c61515" />
<ChatPlus color="#3759e5" />
<DataMatrix color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<Adjust class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<Adjust class="position-absolute top-0 px-1" />
```

<p align="center">
<img width="400" src="https://raw.githubusercontent.com/shinokada/svelte-materialdesign-icons/blob/main/static/images/materialdesign2.png" />
</p>

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Adjust class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `AccessPointOff` has `aria-label="access point off"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AccessPointOff ariaLabel="Access off">
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AccessPointOff tabindex="0">
```

## Using svelte:component

```html
<script>
	import { ChatPlus } from 'svelte-materialdesign-icons';
	const props = {
		size: '50',
		color: '#ff0000'
	};
</script>

<svelte:component this={ChatPlus} />
```

## Using onMount

```html
<script>
  import { ChatPlus } from 'svelte-materialdesign-icons';
	import { onMount } from 'svelte';
	onMount(() => {
		const icon = new ChatPlus({ target: document.body, props });
	});
</script>
```

## Import all

[REPL](https://svelte.dev/repl/c0045886b264408fba13f1de70c42932?version=3.48.0)

Use `import * as Icon from 'svelte-materialdesign-icons`.

```html
<script>
	import * as Icon from 'svelte-materialdesign-icons';
</script>

<Icon.Bucket />
<Icon.Card />

<h1>Size</h1>
<Icon.Bucket size="30" />
<Icon.Card size="40" />

<h1>CSS HEX color</h1>
<Icon.Bucket color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.Bucket class="text-blue-500" />
<Icon.Card class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
- [Svelte-Awesome-Icons](https://www.npmjs.com/package/svelte-awesome-icons)
- [Svelte-materialdesign-icons](https://www.npmjs.com/package/svelte-materialdesign-icons)
- [Svelte-Ionicons](https://www.npmjs.com/package/svelte-ionicons)
- [Svelte-heros](https://github.com/shinokada/svelte-heros)
- [Svelte-lucide](https://github.com/shinokada/svelte-lucide)
- [Svelte-flags](https://www.npmjs.com/package/svelte-flags)
- [Svlete-simples](https://github.com/shinokada/svelte-simples)
- [Svelte-feathers](https://github.com/shinokada/svelte-feathers)
