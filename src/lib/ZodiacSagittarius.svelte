<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'zodiac sagittarius';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-zodiac-sagittarius"
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
    d="M22,2V12H20V5.41L10.41,15L12.71,17.29L11.29,18.71L9,16.41L3.71,21.71L2.29,20.29L7.59,15L5.29,12.71L6.71,11.29L9,13.59L18.59,4H12V2H22Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'zodiac sagittarius';
-->
