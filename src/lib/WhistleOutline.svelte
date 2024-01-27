<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'whistle outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-whistle-outline"
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
    d="M3.76 3.7L2.14 4.88L4.43 8A8.23 8.23 0 0 1 6.35 7.28M11 9V11H18V11.29L13 12.71V15.5A4.5 4.5 0 1 1 8.5 11H9V9H8.5A6.5 6.5 0 1 0 15 15.5V13.91L22 12V9M16.24 3.7L13.85 7H16.32L17.86 4.88M9 2V7H11V2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'whistle outline';
-->
