<h1 align="center">Svelte Materialdesign Icons</h1>

<p align="center">
<a href="https://svelte-materialdesign-icons.codewithshin.com/">Svelte-Materialdesign-Icons</a>
</p>

<p align="center">
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield"></a>
<a href="https://www.npmjs.com/package/svelte-materialdesign-icons" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-materialdesign-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-materialdesign-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-materialdesign-icons" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-materialdesign-icons.svg" alt="npm"></a>
</p>

6980+ Material Design SVG icon components for Svelte. Svelte-Materialdesign-Icons support major CSS frameworks using the `class` props.

<p align="center">
<img width="650" src="/static/images/material-650-1050-optimized.png" />
</p>

## Installation

```sh
npm i -D svelte-materialdesign-icons
```

## Icon name list

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

## Usages

In a svelte file:

```html
<script>
  import {
    Adjust,
    ArrowUpBoldOutline,
    Bucket,
    Card,
    ChatPlus,
    DataMatrix
  } from 'svelte-materialdesign-icons';
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
<img width="400" src="https://raw.githubusercontent.com/shinokada/svelte-materialdesign/main/static/images/materialdesign2.png" />
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
<AccessPointOff ariaLabel="Access off"></AccessPointOff>
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AccessPointOff tabindex="0"></AccessPointOff>
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

<svelte:component this="{ChatPlus}" />
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

[REPL](https://svelte.dev/repl/c0045886b264408fba13f1de70c42932)

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

## Original source

[Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
