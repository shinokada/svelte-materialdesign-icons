<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'label multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-label-multiple"
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
    d="M4 19H13L11 21H4C3.5 21 2.97 20.79 2.59 20.41C2.21 20.03 2 19.5 2 19V9H4V19M17.63 5.84C17.27 5.33 16.67 5 16 5H8C6.9 5 6 5.9 6 7V15C6 16.1 6.9 17 8 17H16C16.67 17 17.27 16.66 17.63 16.15L22 11L17.63 5.84Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'label multiple';
-->
