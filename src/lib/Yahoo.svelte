<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'yahoo';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-yahoo"
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
    d="M10.5 7.59L8.16 13.2L5.85 7.59H2L6.29 17.23L4.75 20.7H8.5L14.24 7.59H10.5M15 12.73C13.63 12.73 12.59 13.77 12.59 15C12.59 16.17 13.59 17.16 14.93 17.16C16.32 17.16 17.36 16.13 17.36 14.9C17.36 13.69 16.36 12.73 15 12.73M17.72 3.3L13.89 11.89H18.17L22 3.3H17.72Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'yahoo';
-->
