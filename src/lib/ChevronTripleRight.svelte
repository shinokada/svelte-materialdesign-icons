<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'chevron triple right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-chevron-triple-right"
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
    d="M14.58,16.59L19.17,12L14.58,7.41L16,6L22,12L16,18L14.58,16.59M8.58,16.59L13.17,12L8.58,7.41L10,6L16,12L10,18L8.58,16.59M2.58,16.59L7.17,12L2.58,7.41L4,6L10,12L4,18L2.58,16.59Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'chevron triple right';
-->
