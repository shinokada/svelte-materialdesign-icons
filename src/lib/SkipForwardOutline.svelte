<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'skip forward outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-skip-forward-outline"
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
    d="M6,9.83L8.17,12L6,14.17V9.83M4,5V19L11,12M20,5H18V19H20M13,9.83L15.17,12L13,14.17V9.83M11,5V19L18,12"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'skip forward outline';
-->
