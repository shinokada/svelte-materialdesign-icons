<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'upload off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-upload-off"
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
    d="M22.11 21.46L2.39 1.73L1.11 3L6.56 8.45L5 10H8.11L9 10.89V16H14.11L16.11 18H5V20H18.11L20.84 22.73L22.11 21.46M15 10H19L12 3L9.1 5.9L15 11.8V10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'upload off';
-->
