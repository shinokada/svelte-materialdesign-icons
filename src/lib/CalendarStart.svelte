<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'calendar start';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-calendar-start"
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
    d="M2 14H4V17H9V14L13 18L9 22V19H4V22H2V14M19 19V8H5V12H3L3 5C3 3.89 3.89 3 5 3H6V.998H8V3H16V.998H18V3H19C20.1 3 21 3.89 21 5V19C21 20.1 20.1 21 19 21L12.83 21L14.83 19L19 19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'calendar start';
-->
