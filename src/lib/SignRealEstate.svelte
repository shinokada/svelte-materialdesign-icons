<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'sign real estate';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-sign-real-estate"
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
    d="M18 8H8C6.9 8 6 8.9 6 10V16C6 17.11 6.9 18 8 18H18C19.11 18 20 17.11 20 16V10C20 8.9 19.11 8 18 8M14 16H8V14H14V16M18 12H8V10H18V12M22 6H4V22H2V2H4V4H22V6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'sign real estate';
-->
