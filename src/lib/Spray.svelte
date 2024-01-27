<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'spray';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-spray"
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
    d="M10,4H12V6H10V4M7,3H9V5H7V3M7,6H9V8H7V6M6,8V10H4V8H6M6,5V7H4V5H6M6,2V4H4V2H6M13,22A2,2 0 0,1 11,20V10A2,2 0 0,1 13,8V7H14V4H17V7H18V8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H13M13,10V20H18V10H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'spray';
-->
