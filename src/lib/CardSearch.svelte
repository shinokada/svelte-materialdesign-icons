<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'card search';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-card-search"
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
    d="M11.5 9C10.12 9 9 10.12 9 11.5S10.12 14 11.5 14 14 12.88 14 11.5 12.88 9 11.5 9M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M16.79 18.21L13.88 15.3C13.19 15.74 12.37 16 11.5 16C9 16 7 14 7 11.5S9 7 11.5 7 16 9 16 11.5C16 12.38 15.74 13.19 15.3 13.89L18.21 16.79L16.79 18.21Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'card search';
-->
