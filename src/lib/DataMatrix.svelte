<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'data matrix';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-data-matrix"
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
    d="M2 2V22H22V20H20V18H22V16H20V14H22V12H18V10H16V12H14V10H12V8H8V12H12V16H10V18H12V20H10V18H8V16H6V14H4V12H6V6H4V2H2M6 6H8V2H6V6M8 16H10V14H8V16M18 10H22V8H18V10M18 8V4H16V6H14V8H18M16 4V2H14V4H16M18 4H20V2H18V4M20 4V6H22V4H20M10 2V6H12V2H10M14 14H16V16H18V20H14V14M4 18H6V20H4V18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'data matrix';
-->
