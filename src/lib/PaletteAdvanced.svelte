<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'palette advanced';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-palette-advanced"
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
    d="M22,22H10V20H22V22M2,22V20H9V22H2M18,18V10H22V18H18M18,3H22V9H18V3M2,18V3H16V18H2M9,14.56A3,3 0 0,0 12,11.56C12,9.56 9,6.19 9,6.19C9,6.19 6,9.56 6,11.56A3,3 0 0,0 9,14.56Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'palette advanced';
-->
