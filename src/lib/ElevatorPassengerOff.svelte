<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'elevator passenger off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-elevator-passenger-off"
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
    d="M22.11 21.46L20.7 20.05L20.7 20.04L2.39 1.73L1.11 3L3 4.9C3 4.94 3 4.97 3 5V19C3 20.1 3.9 21 5 21H19C19.03 21 19.06 21 19.1 21L20.84 22.73L22.11 21.46M11 14H10V18H7V14H6V11.5C6 10.5 6.71 9.71 7.65 9.54L11 12.89V14M13.46 10.26L6.2 3H19C20.1 3 21 3.9 21 5V17.8L17.31 14.11L18 13H16.2L14.2 11H18L15.5 7L13.46 10.26Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'elevator passenger off';
-->
