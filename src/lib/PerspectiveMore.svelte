<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'perspective more';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-perspective-more"
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
    d="M16.56,12L19.23,20H4.78L7.44,12H16.56M17,1L13,5L17,9V6H21V4H17V1M7,1V4H3V6H7V9L11,5L7,1M18,10H6L2,22H22L18,10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'perspective more';
-->
