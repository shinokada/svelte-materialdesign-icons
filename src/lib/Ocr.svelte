<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'ocr';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-ocr"
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
    d="M2 5V19H14V17H12C10.89 17 10 16.11 10 15V9C10 7.89 10.89 7 12 7H14V5M14 7V9H16V7M14 9H12V15H14M14 15V17H16V15M5 7H7C8.11 7 9 7.89 9 9V15C9 16.11 8.11 17 7 17H5C3.89 17 3 16.11 3 15V9C3 7.89 3.89 7 5 7M17 7V17H19V13H20V14H21V17H23V14H22V12H23V8H22V7M5 9V15H7V9M19 9H21V11H19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'ocr';
-->
