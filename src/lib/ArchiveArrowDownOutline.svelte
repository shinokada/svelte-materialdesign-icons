<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'archive arrow down outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-archive-arrow-down-outline"
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
    d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M5 5V7H19V5M10.5 11V14H8L12 18L16 14H13.5V11"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'archive arrow down outline';
-->
