<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'projector screen off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-projector-screen-off-outline"
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
    d="M20.84 22.73L22.11 21.46L2.39 1.73L1.11 3L5 6.89V14H11V16.59L6.79 20.79L8.21 22.21L11 19.41V22H13V19.41L15.79 22.21L17.21 20.79L13 16.59V14.89L20.84 22.73M7 12V8.89L10.11 12H7M8.2 5L5.2 2H20C20.55 2 21 2.45 21 3V4C21 4.55 20.55 5 20 5H19V14H17.2L15.2 12H17V5H8.2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'projector screen off outline';
-->
