<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'home switch outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-home-switch-outline"
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
    d="M8 3L1 9H3V15H7V11H9V15H13V9H15L8 3M11.5 9V13.5H10.5V9.5H5.5V13.5H4.5V8L8 5L11.5 8V9M9 16V18H15V16L18 19L15 22V20H9V22L6 19L9 16M23 9H21V15H15V10H19L13.54 5.11L16 3L23 9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'home switch outline';
-->
