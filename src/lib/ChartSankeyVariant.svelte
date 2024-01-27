<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'chart sankey variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-chart-sankey-variant"
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
    d="M20 4V6H4V4H2V12H4V10C8.16 10 9.92 12.11 11.77 14.34S15.65 19 20 19V21H22V15H20V17C16.59 17 15.07 15.17 13.31 13.06C11.34 10.69 9.1 8 4 8H20V10H22V4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'chart sankey variant';
-->
