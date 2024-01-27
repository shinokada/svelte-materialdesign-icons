<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'checkerboard plus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-checkerboard-plus"
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
    d="M19 17H22V19H19V22H17V19H14V17H17V14H19V17M8 16H12V12H8V16M12 12H16V8H12V12M2 2V22H13.54C13 21.42 12.63 20.74 12.36 20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12.36C20.74 12.63 21.42 13 22 13.54V2H2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'checkerboard plus';
-->
