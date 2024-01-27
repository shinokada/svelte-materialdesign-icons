<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'camera front';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-camera-front"
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
    d="M7,2H17V12.5C17,10.83 13.67,10 12,10C10.33,10 7,10.83 7,12.5M17,0H7A2,2 0 0,0 5,2V16A2,2 0 0,0 7,18H17A2,2 0 0,0 19,16V2A2,2 0 0,0 17,0M12,8A2,2 0 0,0 14,6A2,2 0 0,0 12,4A2,2 0 0,0 10,6A2,2 0 0,0 12,8M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'camera front';
-->
