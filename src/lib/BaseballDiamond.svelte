<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'baseball diamond';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-baseball-diamond"
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
    d="M5.79 12.79L2 9C2 9 6 3 12 3S22 9 22 9L18.21 12.79L12 6.59L5.79 12.79M13.5 18H10.5V20L12 21L13.5 20V18M16.79 14.21L14.2 16.8C13.6 16.31 12.84 16 12 16S10.4 16.31 9.8 16.8L7.21 14.21L12 9.41L16.79 14.21M13 14C13 13.45 12.55 13 12 13S11 13.45 11 14 11.45 15 12 15 13 14.55 13 14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'baseball diamond';
-->
