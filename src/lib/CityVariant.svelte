<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'city variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-city-variant"
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
    d="M19,9V7A2,2 0 0,0 17,5H16V2H14V5H13A2,2 0 0,0 11,7V9A2,2 0 0,0 9,11V12H5A2,2 0 0,0 3,14V22H6V20H8V22H12V20H14V22H16V20H18V22H21V11A2,2 0 0,0 19,9M8,18H6V16H8V18M14,18H12V16H14V18M14,14H12V12H14V14M13,9V7H17V9H13M18,18H16V16H18V18M18,14H16V12H18V14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'city variant';
-->
