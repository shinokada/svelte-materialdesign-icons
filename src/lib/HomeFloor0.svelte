<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'home floor 0';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-home-floor-0"
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
    d="M11,10H13V16H11V10M22,12H19V20H5V12H2L12,3L22,12M15,10A2,2 0 0,0 13,8H11A2,2 0 0,0 9,10V16A2,2 0 0,0 11,18H13A2,2 0 0,0 15,16V10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'home floor 0';
-->
