<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'label variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-label-variant"
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
    d="M3.5,19L8.34,12L3.5,5H14.5C15.17,5 15.72,5.3 16.13,5.86L20.5,12L16.13,18.14C15.72,18.7 15.17,19 14.5,19H3.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'label variant';
-->
