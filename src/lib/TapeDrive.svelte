<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'tape drive';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-tape-drive"
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
    d="M12 10C13.11 10 14 10.9 14 12C14 13.11 13.11 14 12 14C10.9 14 10 13.11 10 12C10 10.9 10.9 10 12 10M5 3H19C20.11 3 21 3.9 21 5V17H16.9C18.2 15.73 19 13.96 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19H21C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'tape drive';
-->
