<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'bottle soda';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-bottle-soda"
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
    d="M15 11V20A2 2 0 0 1 13 22H11A2 2 0 0 1 9 20V11A2 2 0 0 1 9.6 9.58C11.1 7.89 11 4 11 4H10V2H14V4H13S12.9 7.89 14.4 9.58A2 2 0 0 1 15 11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'bottle soda';
-->
