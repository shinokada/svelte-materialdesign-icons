<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'focus auto';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-focus-auto"
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
    d="M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15M8 7C6.9 7 6 7.9 6 9V17H8V13H10V17H12V9C12 7.9 11.1 7 10 7H8M8 9H10V11H8V9M13 7V17H15V13H17V11H15V9H18V7H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'focus auto';
-->
