<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'projector screen outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-projector-screen-outline"
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
    d="M20 2H4C3.45 2 3 2.45 3 3V4C3 4.55 3.45 5 4 5H5V14H11V16.59L6.79 20.79L8.21 22.21L11 19.41V22H13V19.41L15.79 22.21L17.21 20.79L13 16.59V14H19V5H20C20.55 5 21 4.55 21 4V3C21 2.45 20.55 2 20 2M17 12H7V5H17V12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'projector screen outline';
-->
