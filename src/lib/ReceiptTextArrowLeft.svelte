<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'receipt text arrow left';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-receipt-text-arrow-left"
  width={size}
  height={size}
  fill={color}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 24 24"
  ><path
    d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.26 20.74C13.09 20.18 13 19.59 13 19C13 18.32 13.12 17.64 13.34 17H6V15H14.53C15.67 13.73 17.29 13 19 13C19.68 13 20.36 13.12 21 13.34V2L19.5 3.5M18 13H6V11H18V13M18 9H6V7H18V9M18 18V16L15 19L18 22V20H22V18H18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'receipt text arrow left';
-->
