<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'navigation variant outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-navigation-variant-outline"
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
    d="M17.27 6.73L13.03 16.86L11.71 13.44L11.39 12.61L10.57 12.29L7.14 10.96L17.27 6.73M21 3L3 10.53V11.5L9.84 14.16L12.5 21H13.46L21 3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'navigation variant outline';
-->
