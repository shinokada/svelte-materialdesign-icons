<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'purse outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-purse-outline"
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
    d="M19,11L20,19H4L5,11H19M14,3H10L8,5V9H4.7A1.65,1.65 0 0,0 3,10.5L2,19.1A1.74,1.74 0 0,0 3.7,21H20.3A1.74,1.74 0 0,0 22,19.1L21,10.5A1.65,1.65 0 0,0 19.3,9H16V5L14,3M10,9V5H14V9"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'purse outline';
-->
