<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'ruler square compass';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-ruler-square-compass"
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
    d="M20 19.88V22L18.2 20.83L13.41 11.83A4.94 4.94 0 0 0 15.19 10.83M15 7A3 3 0 0 1 12 10A3.27 3.27 0 0 1 11.56 10L5.8 20.83L4 22V19.88L9.79 9A3 3 0 0 1 12 4V2A1 1 0 0 1 13 3V4.18A3 3 0 0 1 15 7M13 7A1 1 0 1 0 12 8A1 1 0 0 0 13 7M4.22 10L6 11.8L4.56 14.56L2.1 12.1M12 17.76L10.5 16.25L9 19L12 22L15 19L13.53 16.23M19.78 10L18 11.8L19.5 14.56L21.9 12.1Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'ruler square compass';
-->
