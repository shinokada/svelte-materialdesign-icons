<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'forest';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-forest"
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
    d="M16 12L9 2L2 12H3.86L0 18H7V22H11V18H18L14.14 12H16M20.14 12H22L15 2L12.61 5.41L17.92 13H15.97L19.19 18H24L20.14 12M13 19H17V22H13V19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'forest';
-->
