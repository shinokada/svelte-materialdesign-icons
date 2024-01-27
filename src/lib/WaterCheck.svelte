<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'water check';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-water-check"
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
    d="M21.75 16.25L17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20H12.34C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'water check';
-->
