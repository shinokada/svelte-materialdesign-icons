<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'gymnastics';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-gymnastics"
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
    d="M4 6C4 4.9 4.9 4 6 4S8 4.9 8 6 7.1 8 6 8 4 7.1 4 6M1 9H7L14 4L15.31 5.5L11.14 8.5H14L21.8 4L23 5.4L14.5 12L14 22H12L11.5 12L8 11H1V9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'gymnastics';
-->
