<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'download off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-download-off-outline"
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
    d="M22.11 21.46L2.39 1.73L1.11 3L7.11 9H5L12 16L13.06 14.95L16.11 18H5V20H18.11L20.84 22.73L22.11 21.46M11 5H13V9.8L15.6 12.4L19 9H15V3H9V5.8L11 7.8V5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'download off outline';
-->
