<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wall sconce flat variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wall-sconce-flat-variant"
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
    d="M19 19V13H5V19H19M18.73 10.68L20.5 8.91L19.09 7.5L17.32 9.27L18.73 10.68M5.27 10.68L6.68 9.27L4.91 7.5L3.5 8.91L5.27 10.68M13 8V5H11V8H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wall sconce flat variant';
-->
