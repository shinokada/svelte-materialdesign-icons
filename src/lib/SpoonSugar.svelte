<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'spoon sugar';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-spoon-sugar"
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
    d="M6 13H3V10H6V13M10 10H7V13H10V10M8 6H5V9H8V6M18 12C14.25 12 12.28 13.25 11 14H2C2 16.21 3.79 18 6 18H7C8 18 8.92 17.63 9.62 17C11.06 15.78 12.68 14.74 14.55 14.36C15.61 14.15 16.78 14 18 14H22V12H18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'spoon sugar';
-->
