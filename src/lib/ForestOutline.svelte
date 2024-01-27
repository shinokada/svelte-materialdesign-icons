<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'forest outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-forest-outline"
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
    d="M19.19 18H24L20.14 12H22L15 2L12.61 5.41L17.92 13H15.97L19.19 18M16 12L9 2L2 12H3.86L0 18H7V22H11V18H18L14.14 12H16M12.16 10H10.5L14.34 16H3.67L7.53 10H5.84L9 5.5L12.16 10M13 19V22H17V19H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'forest outline';
-->
