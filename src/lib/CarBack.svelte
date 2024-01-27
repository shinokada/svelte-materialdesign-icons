<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'car back';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-car-back"
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
    d="M6,11L7,7H17L18,11M18.92,6C18.71,5.4 18.14,5 17.5,5H6.5C5.86,5 5.29,5.4 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V18H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6M7,16H5V14H7V16M19,16H17V14H19V16M14,16H10V14H14V16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'car back';
-->
