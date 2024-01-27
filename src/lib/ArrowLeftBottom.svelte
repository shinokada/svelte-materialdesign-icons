<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow left bottom';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-arrow-left-bottom"
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
    d="M20 4V10.5C20 14.09 17.09 17 13.5 17H7.83L10.92 20.09L9.5 21.5L4 16L9.5 10.5L10.91 11.91L7.83 15H13.5C16 15 18 13 18 10.5V4H20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'arrow left bottom';
-->
