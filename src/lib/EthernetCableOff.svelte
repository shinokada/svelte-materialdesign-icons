<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'ethernet cable off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-ethernet-cable-off"
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
    d="M11,3H13V7H11V3M8,4H10V8H14V4H16V11H12.82L8,6.18V4M20,20.72L18.73,22L14,17.27V22H10V13.27L2,5.27L3.28,4L20,20.72Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'ethernet cable off';
-->
