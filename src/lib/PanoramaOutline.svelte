<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'panorama outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-panorama-outline"
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
    d="M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4M21 18H3V6H21V18M14.5 11L11 15.5L8.5 12.5L5 17H19L14.5 11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'panorama outline';
-->
