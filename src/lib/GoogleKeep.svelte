<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'google keep';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-google-keep"
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
    d="M4 2H20C21.11 2 22 2.9 22 4V17.33L17.33 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2M17 17V20.25L20.25 17H17M10 19H14V18H15V13C16.21 12.09 17 10.64 17 9C17 6.24 14.76 4 12 4S7 6.24 7 9C7 10.64 7.79 12.09 9 13V18H10V19M14 17H10V15H14V17M12 5C14.21 5 16 6.79 16 9C16 10.5 15.2 11.77 14 12.46V14H10V12.46C8.8 11.77 8 10.5 8 9C8 6.79 9.79 5 12 5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'google keep';
-->
