<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'flag plus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-flag-plus"
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
    d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'flag plus';
-->
