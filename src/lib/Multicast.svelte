<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'multicast';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-multicast"
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
    d="M17 2V4H12C10.9 4 10 4.89 10 6V9H12V6H17V8L20 5L17 2M17 9V11H6.73C6.37 10.38 5.71 10 5 10C3.9 10 3 10.9 3 12S3.9 14 5 14C5.71 14 6.37 13.62 6.73 13H17V15L20 12L17 9M10 15V18C10 19.11 10.9 20 12 20H17V22L20 19L17 16V18H12V15H10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'multicast';
-->
