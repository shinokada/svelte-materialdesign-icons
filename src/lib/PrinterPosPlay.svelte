<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'printer pos play';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-printer-pos-play"
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
    d="M20 13.09V12C20 10.9 19.11 10 18 10H6C4.89 10 4 10.9 4 12V19H13C13 15.69 15.69 13 19 13C19.34 13 19.67 13.04 20 13.09M10 14H6V12H10V14M17 9H7V4H17V9M22 19L17 22V16L22 19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'printer pos play';
-->
