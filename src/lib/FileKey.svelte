<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file key';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-key"
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
    d="M11 16C11 16.6 10.6 17 10 17S9 16.6 9 16C9 15.4 9.4 15 10 15S11 15.4 11 16M20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14M18 15H12.8C12.2 13.4 10.5 12.6 9 13.2C7.4 13.8 6.6 15.5 7.2 17S9.5 19.4 11 18.8C11.9 18.5 12.5 17.8 12.8 17H14V19H16V17H18M18.5 9L13 3.5V9H18.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file key';
-->
