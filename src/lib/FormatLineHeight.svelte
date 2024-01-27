<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'format line height';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-format-line-height"
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
    d="M21 22H3V20H21V22M21 4H3V2H21V4M10 13.7H14L12 8.3L10 13.7M11.2 6H12.9L17.6 18H15.6L14.7 15.4H9.4L8.5 18H6.5L11.2 6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'format line height';
-->
