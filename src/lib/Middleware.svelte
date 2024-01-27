<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'middleware';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-middleware"
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
    d="M23 12L19 8V11H14.82C14.4 9.84 13.3 9 12 9S9.6 9.84 9.18 11H5L2 8V16L5 13H9.18C9.6 14.16 10.7 15 12 15S14.4 14.16 14.82 13H19V16L23 12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'middleware';
-->
