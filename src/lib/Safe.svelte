<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'safe';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-safe"
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
    d="M4,4A2,2 0 0,0 2,6V17A2,2 0 0,0 4,19V20H6V19H17V20H19V19A2,2 0 0,0 21,17V16H22V14H21V9H22V7H21V6A2,2 0 0,0 19,4H4M4,6H19V17H4V6M13.5,7.5A4,4 0 0,0 9.5,11.5A4,4 0 0,0 13.5,15.5A4,4 0 0,0 17.5,11.5A4,4 0 0,0 13.5,7.5M5,9V14H7V9H5M13.5,9.5A2,2 0 0,1 15.5,11.5A2,2 0 0,1 13.5,13.5A2,2 0 0,1 11.5,11.5A2,2 0 0,1 13.5,9.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'safe';
-->
