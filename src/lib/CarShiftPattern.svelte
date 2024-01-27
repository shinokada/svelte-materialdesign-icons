<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'car shift pattern';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-car-shift-pattern"
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
    d="M8 5H4V2H8V5M4 22H8V19H4V22M14 2H10V5H14V2M10 22H14V19H10V22M16 2V5H20V2H16M17 11H13V7H11V11H7V7H5V17H7V13H11V17H13V13H19V7H17V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'car shift pattern';
-->
