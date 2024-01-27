<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'selection drag';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-selection-drag"
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
    d="M14,17H17V14H19V17H22V19H19V22H17V19H14V17M12,17V19H9V17H12M7,17V19H3V15H5V17H7M3,13V10H5V13H3M3,8V4H7V6H5V8H3M9,4H12V6H9V4M15,4H19V8H17V6H15V4M19,10V12H17V10H19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'selection drag';
-->
