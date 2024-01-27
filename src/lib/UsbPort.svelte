<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'usb port';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-usb-port"
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
    d="M8 2C6.9 2 6 2.9 6 4V12H5V16L9 20V22H15V20L19 16V12H18V4C18 2.9 17.11 2 16 2M8 4H16V12H8M9 7V9H11V7M13 7V9H15V7Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'usb port';
-->
