<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'fridge alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-fridge-alert"
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
    d="M5 2H15C16.11 2 17 2.9 17 4V9H3V4C3 2.9 3.9 2 5 2M17 19C17 20.11 16.11 21 15 21V22H13V21H7V22H5V21C3.9 21 3 20.11 3 19V10H17V19M6 5V7H8V5H6M6 12V15H8V12H6M19 15H21V17H19V15M19 7H21V13H19V7Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'fridge alert';
-->
