<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'dip switch';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-dip-switch"
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
    d="M3,4H7A1,1 0 0,1 8,5V19A1,1 0 0,1 7,20H3A1,1 0 0,1 2,19V5A1,1 0 0,1 3,4M10,4H14A1,1 0 0,1 15,5V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V5A1,1 0 0,1 10,4M17,4H21A1,1 0 0,1 22,5V19A1,1 0 0,1 21,20H17A1,1 0 0,1 16,19V5A1,1 0 0,1 17,4M4,18H6V13H4V18M11,11H13V6H11V11M18,18H20V13H18V18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'dip switch';
-->
