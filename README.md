<h1 align="center">Svelte Materialdesign Icons</h1>

<p align="center">
<a href="https://svelte-materialdesign-icons.codewithshin.com/">Svelte-Materialdesign-Icons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-materialdesign-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-materialdesign-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-materialdesign-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-materialdesign-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-materialdesign-icons.svg" alt="npm" height="25"></a>
</p>

6980+ Material Design SVG icon components for Svelte. Svelte-Materialdesign-Icons support major CSS frameworks using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

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
  import { Bucket } from 'svelte-materialdesign-icons';
</script>

<Bucket />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Bucket from 'svelte-materialdesign-icons/Bucket.svelte';
</script>

<Bucket />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is now available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size="24"; 
- color="currentColor";
- ariaLabel="abacus" 

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

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
<img width="400" src="https://raw.githubusercontent.com/shinokada/svelte-materialdesign-icons/main/static/images/materialdesign2.png" />
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
<AccessPointOff ariaLabel="Access off" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<AccessPointOff tabindex="-1" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AccessPointOff tabindex="0" />
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

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout


## Original source

[Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
