<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file rotate right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-rotate-right"
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
    d="M5 20C3.9 20 3 19.11 3 18V9C3 7.9 3.9 7 5 7H9L13 11V18C13 19.11 12.11 20 11 20H5M11 11.83L8.17 9H8V12H11V11.83M20 11H23L19 15L15 11H18C18 7.69 15.31 5 12 5L11 5.08V3.06L12 3C16.42 3 20 6.58 20 11"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file rotate right';
-->
