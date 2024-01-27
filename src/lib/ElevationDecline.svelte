<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'elevation decline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-elevation-decline"
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
    d="M21,21H3V11.25L9.45,15L13.22,12.8L21,17.29V21M3,8.94V6.75L9.45,10.5L13.22,8.3L21,12.79V15L13.22,10.5L9.45,12.67L3,8.94Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'elevation decline';
-->
