<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'fridge industrial alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-fridge-industrial-alert"
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
    d="M15 2H5C3.9 2 3 2.9 3 4V19C3 20.11 3.9 21 5 21V22H7V21H13V22H15V21C16.11 21 17 20.11 17 19V4C17 2.9 16.11 2 15 2M8 15H6V10H8V15M21 7V13H19V7H21M19 15H21V17H19V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'fridge industrial alert';
-->
