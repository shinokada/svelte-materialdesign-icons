<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'movie search outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-movie-search-outline"
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
    d="M11 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13C21.5 12.2 20.8 11.5 20 11V10H5.8L4 6.5V18H10.2C10.4 18.7 10.6 19.4 11 20M20.3 18.9C20.7 18.2 21 17.4 21 16.5C21 14 19 12 16.5 12S12 14 12 16.5 14 21 16.5 21C17.4 21 18.2 20.8 18.9 20.3L22 23.4L23.4 22L20.3 18.9M16.5 19C15.1 19 14 17.9 14 16.5S15.1 14 16.5 14 19 15.1 19 16.5 17.9 19 16.5 19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'movie search outline';
-->
