<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'music accidental flat';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-music-accidental-flat"
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
    d="M8.5 19C13.36 16.26 15.5 13.91 15.5 12C15.5 10.59 14.79 9 12.5 9C11.8 9 11.11 9.28 10.5 9.67V5H8.5M10.5 15.38V12.26C11.12 11.59 11.95 11 12.5 11C13.09 11 13.5 11.07 13.5 12C13.5 12.15 13.4 13.3 10.5 15.38Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'music accidental flat';
-->
