<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'domain switch';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-domain-switch"
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
    d="M16 9H18V11H16V9M22 15V5H12V1H2V15H22M20 13H12V11H14V9H12V7H20V13M8 5V3H10V5H8M8 9V7H10V9H8M8 13V11H10V13H8M4 5V3H6V5H4M4 9V7H6V9H4M4 13V11H6V13H4M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'domain switch';
-->
