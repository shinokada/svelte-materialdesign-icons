<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'food off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-food-off"
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
    d="M11.35 8.5L11 5H16V1H18V5H23L21.62 18.79L11.35 8.5M1 21V22C1 22.55 1.45 23 2 23H15C15.55 23 16 22.55 16 22V21H1M21.9 21.9L2.1 2.1L.69 3.5L6.39 9.21C3.28 9.87 1 12 1 15H12.17L14.17 17H1V19H16V18.83L20.5 23.32L21.9 21.9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'food off';
-->
