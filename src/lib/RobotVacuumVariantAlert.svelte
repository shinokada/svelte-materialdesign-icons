<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'robot vacuum variant alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-robot-vacuum-variant-alert"
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
    d="M3 3C1.9 3 1 3.9 1 5V7H3V5H17V7H19V5C19 3.9 18.1 3 17 3H3M6 7V9H14V7H6M1 9V12C1 17 5 21 10 21S19 17 19 12V9H17V12C17 15.9 13.9 19 10 19S3 15.9 3 12V9H1M10 12C8.6 12 7.5 13.1 7.5 14.5S8.6 17 10 17 12.5 15.9 12.5 14.5 11.4 12 10 12M21 12V7H23V13H21M21 17V15H23V17H21Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'robot vacuum variant alert';
-->
