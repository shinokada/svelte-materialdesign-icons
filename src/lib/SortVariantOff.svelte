<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'sort variant off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-sort-variant-off"
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
    d="M20.84 22.73L11.11 13H3V11H9.11L6.11 8H3V6H4.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M15 11H14.2L15 11.8V11M21 8V6H9.2L11.2 8H21M3 18H9V16H3V18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'sort variant off';
-->
