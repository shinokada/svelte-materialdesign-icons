<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'compare remove';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-compare-remove"
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
    d="M19 5H14V3H19C20.1 3 21 3.9 21 5V13.4C20.4 13.2 19.7 13 19 13V5M10 1H12V23H10V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H10V1M10 12L5 18H10V12M15.7 14L14 12V15.7C14.4 15 15 14.5 15.7 14M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'compare remove';
-->
