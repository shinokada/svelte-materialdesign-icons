<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'flag variant off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-flag-variant-off"
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
    d="M20.8 22.7L10.2 12.1C7.8 12.4 7 14 7 14V21H5V6.9L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M20 12V4C20 4 19 6 16 6C14 6 14 4 11 4C9.8 4 8.7 4.3 7.8 4.6L17.1 13.9C19.2 13.5 20 12 20 12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'flag variant off';
-->
