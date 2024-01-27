<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'folder star outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-folder-star-outline"
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
    d="M10.78 12.05L13.81 11.79L15 9L16.19 11.79L19.22 12.05L16.92 14.04L17.61 17L15 15.47L12.39 17L13.08 14.04L10.78 12.05M22 8V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H10L12 6H20C21.11 6 22 6.9 22 8M20 8H4V18H20V8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'folder star outline';
-->
