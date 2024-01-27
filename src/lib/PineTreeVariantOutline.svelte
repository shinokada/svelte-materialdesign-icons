<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'pine tree variant outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-pine-tree-variant-outline"
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
    d="M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19M15.16 10H13.5L17.34 16H6.67L10.53 10H8.84L12 5.5L15.16 10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'pine tree variant outline';
-->
