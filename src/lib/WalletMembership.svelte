<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wallet membership';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wallet-membership"
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
    d="M20,10H4V4H20M20,15H4V13H20M20,2H4C2.89,2 2,2.89 2,4V15C2,16.11 2.89,17 4,17H8V22L12,20L16,22V17H20C21.11,17 22,16.11 22,15V4C22,2.89 21.11,2 20,2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wallet membership';
-->
