<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'decimal comma';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-decimal-comma"
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
    d="M10 7A3 3 0 0 1 13 10V13A3 3 0 0 1 7 13V10A3 3 0 0 1 10 7M10 9A1 1 0 0 0 9 10V13A1 1 0 0 0 11 13V10A1 1 0 0 0 10 9M17 7A3 3 0 0 1 20 10V13A3 3 0 0 1 14 13V10A3 3 0 0 1 17 7M17 9A1 1 0 0 0 16 10V13A1 1 0 0 0 18 13V10A1 1 0 0 0 17 9M5 14A1 1 0 0 0 4 15L5 18H6V15A1 1 0 0 0 5 14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'decimal comma';
-->
