<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'delete off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-delete-off-outline"
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
    d="M2 5.27L3.28 4L5 5.72L5.28 6L6.28 7L8.28 9L16 16.72L18 18.72L20 20.72L18.73 22L17.27 20.54C16.93 20.83 16.5 21 16 21H8C6.9 21 6 20.1 6 19V9.27L2 5.27M8 19H15.73L8 11.27V19M18 7V16.18L16 14.18V9H10.82L8.82 7H18M15.5 4H19V6H7.82L5.82 4H8.5L9.5 3H14.5L15.5 4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'delete off outline';
-->
