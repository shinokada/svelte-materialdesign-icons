<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'vector polyline edit';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-vector-polyline-edit"
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
    d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M21.15 13C21 13 20.87 13.05 20.76 13.16L19.75 14.18L21.82 16.25L22.84 15.24C23.05 15.03 23.05 14.67 22.84 14.46L21.54 13.16C21.43 13.05 21.29 13 21.15 13M19.15 14.76L13 20.91V23H15.09L21.23 16.84L19.15 14.76M8 17H10V19H8V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'vector polyline edit';
-->
