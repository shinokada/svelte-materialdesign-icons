<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'set top box';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-set-top-box"
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
    d="M5,15.5A0.5,0.5 0 0,1 4.5,16H3.5A0.5,0.5 0 0,1 3,15.5V15H2A1,1 0 0,1 1,14V11A1,1 0 0,1 2,10H22A1,1 0 0,1 23,11V14A1,1 0 0,1 22,15H21V15.5A0.5,0.5 0 0,1 20.5,16H19.5A0.5,0.5 0 0,1 19,15.5V15H5V15.5M3,12V13H5V12H3M6,12V13H8V12H6M20.5,11.5A1,1 0 0,0 19.5,12.5A1,1 0 0,0 20.5,13.5A1,1 0 0,0 21.5,12.5A1,1 0 0,0 20.5,11.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'set top box';
-->
