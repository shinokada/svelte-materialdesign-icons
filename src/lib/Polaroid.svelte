<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'polaroid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-polaroid"
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
    d="M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'polaroid';
-->
