<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'image check outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-image-check-outline"
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
    d="M12.18 17C12.54 15.5 13.43 14.16 14.68 13.25L13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H12.18M5 5V19H12.03C12.09 19.7 12.24 20.38 12.5 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.9 3.9 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V12.5C20.38 12.24 19.7 12.09 19 12.03V5H5M17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'image check outline';
-->
