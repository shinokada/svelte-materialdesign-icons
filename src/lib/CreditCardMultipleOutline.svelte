<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'credit card multiple outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-credit-card-multiple-outline"
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
    d="M21,8V6H7V8H21M21,16V11H7V16H21M21,4A2,2 0 0,1 23,6V16A2,2 0 0,1 21,18H7C5.89,18 5,17.1 5,16V6C5,4.89 5.89,4 7,4H21M3,20H18V22H3A2,2 0 0,1 1,20V9H3V20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'credit card multiple outline';
-->
