<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'keyboard off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-keyboard-off"
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
    d="M1,4.27L2.28,3L20,20.72L18.73,22L15.73,19H4C2.89,19 2,18.1 2,17V7C2,6.5 2.18,6.07 2.46,5.73L1,4.27M19,10V8H17V10H19M19,13V11H17V13H19M16,10V8H14V10H16M16,13V11H14V12.18L11.82,10H13V8H11V9.18L9.82,8L6.82,5H20A2,2 0 0,1 22,7V17C22,17.86 21.46,18.59 20.7,18.87L14.82,13H16M8,15V17H13.73L11.73,15H8M5,10H6.73L5,8.27V10M7,13V11H5V13H7M8,13H9.73L8,11.27V13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'keyboard off';
-->
