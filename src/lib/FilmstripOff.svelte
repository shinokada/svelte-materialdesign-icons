<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'filmstrip off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-filmstrip-off"
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
    d="M1,4.27L2.28,3L21,21.72L19.73,23L16,19.27V21H8V19H6V21H4V7.27L1,4.27M18,9V7H16V9H18M18,13V11H16V13H18M18,15H16.82L6.82,5H8V3H16V5H18V3H20V18.18L18,16.18V15M8,13V11.27L7.73,11H6V13H8M8,17V15H6V17H8M6,3V4.18L4.82,3H6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'filmstrip off';
-->
