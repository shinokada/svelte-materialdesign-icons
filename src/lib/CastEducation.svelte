<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cast education';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cast-education"
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
    d="M21,3H3A2,2 0 0,0 1,5V8H3V5H21V19H14V21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M1,18V21H4A3,3 0 0,0 1,18M1,14V16A5,5 0 0,1 6,21H8A7,7 0 0,0 1,14M1,10V12A9,9 0 0,1 10,21H12C12,14.92 7.07,10 1,10M11,11.09V13.09L14.5,15L18,13.09V11.09L14.5,13L11,11.09M14.5,6L9,9L14.5,12L20,9L14.5,6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cast education';
-->
