<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'database minus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-database-minus"
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
    d="M23 17V19H15V17M12 3C16.42 3 20 4.79 20 7S16.42 11 12 11 4 9.21 4 7 7.58 3 12 3M4 9C4 11.21 7.58 13 12 13S20 11.21 20 9V12.08L19 12C16.41 12 14.2 13.64 13.36 15.94L12 16C7.58 16 4 14.21 4 12V9M4 14C4 16.21 7.58 18 12 18H13C13 19.05 13.27 20.04 13.75 20.9L12 21C7.58 21 4 19.21 4 17V14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'database minus';
-->
