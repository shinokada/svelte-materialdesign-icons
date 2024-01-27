<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'lamps outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-lamps-outline"
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
    d="M8.5 4L9.35 7H4.65L5.5 4H8.5M10 2H4L2 9H12L10 2M6 10H8V20H11V22H3V20H6V10M18.5 10L19.35 13H14.65L15.5 10H18.5M20 8H14L12 15H22L20 8M16 16H18V20H21V22H13V20H16V16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'lamps outline';
-->
