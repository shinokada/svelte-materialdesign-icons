<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'home battery';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-home-battery"
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
    d="M12 20L5 20V12H2L12 3L14.78 5.5H14V7.17C12.84 7.58 12 8.7 12 10V20M15 9H16V7.5H20V9H21C21.55 9 22 9.45 22 10V21C22 21.55 21.55 22 21 22H15C14.45 22 14 21.55 14 21V10C14 9.45 14.45 9 15 9M16 11V14H20V11H16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'home battery';
-->
