<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'glass mug';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-glass-mug"
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
    d="M10,4V7H18V4H10M8,2H20L21,2V3L20,4V20L21,21V22H20L8,22H7V21L8,20V18.6L4.2,16.83C3.5,16.5 3,15.82 3,15V8A2,2 0 0,1 5,6H8V4L7,3V2H8M5,15L8,16.39V8H5V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'glass mug';
-->
