<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'map check';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-map-check"
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
    d="M18.25,22L15.5,19L16.66,17.82L18.25,19.41L21.84,15.82L23,17.23M20.5,3A0.5,0.5 0 0,1 21,3.5V13.36C20.36,13.13 19.69,13 19,13C17.46,13 16.06,13.6 15,14.56V7.1L9,5V16.9L13.04,18.3C13,18.54 13,18.77 13,19C13,19.46 13.06,19.92 13.16,20.36L9,18.9L3.66,20.97C3.59,21 3.55,21 3.5,21A0.5,0.5 0 0,1 3,20.5V5.38C3,5.15 3.16,4.97 3.35,4.9L9,3L15,5.1L20.33,3"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'map check';
-->
