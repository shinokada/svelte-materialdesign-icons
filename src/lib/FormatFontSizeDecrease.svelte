<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'format font size decrease';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-format-font-size-decrease"
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
    d="M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,17L23,11.93L21.59,10.5L19,13.1V7H17V13.1L14.41,10.5L13,11.93L18,17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'format font size decrease';
-->
