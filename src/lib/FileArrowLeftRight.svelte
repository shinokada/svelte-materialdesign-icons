<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file arrow left right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-arrow-left-right"
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
    d="M19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H13.81C13.3 21.12 13 20.1 13 19C13 15.69 15.69 13 19 13M13 3.5L18.5 9H13V3.5M20 19.5V18H16V16H20V14.5L23 17L20 19.5M18 20H22V22H18V23.5L15 21L18 18.5V20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file arrow left right';
-->
