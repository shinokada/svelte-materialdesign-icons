<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'keyboard f10';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-keyboard-f10"
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
    d="M2 7H8V9H4V11H7V13H4V17H2V7M10 7H14V17H12V9H10V7M18 7H20C21.11 7 22 7.9 22 9V15C22 16.11 21.11 17 20 17H18C16.9 17 16 16.11 16 15V9C16 7.9 16.9 7 18 7M18 9V15H20V9H18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'keyboard f10';
-->
