<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'currency jpy';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-currency-jpy"
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
    d="M13.92 11H18V13H13V15H18V17H13V21H11V17H6V15H11V13H6V11H10.08L5 3H7.37L12 10.29L16.63 3H19L13.92 11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'currency jpy';
-->
