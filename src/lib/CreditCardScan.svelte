<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'credit card scan';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-credit-card-scan"
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
    d="M18 6H6A2 2 0 0 0 4 8V16A2 2 0 0 0 6 18H18A2 2 0 0 0 20 16V8A2 2 0 0 0 18 6M18 12H6V9H18M2 4H6V2H2A2 2 0 0 0 0 4V8H2V4M22 2H18V4H22V8H24V4A2 2 0 0 0 22 2M2 16H0V20A2 2 0 0 0 2 22H6V20H2V16M22 20H18V22H22A2 2 0 0 0 24 20V16H22V20"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'credit card scan';
-->
