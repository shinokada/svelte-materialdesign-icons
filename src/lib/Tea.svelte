<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'tea';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-tea"
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
    d="M4,19H20V21H4V19M20,8V5H18V8H20M20,3C20.6,3 21,3.2 21.4,3.6C21.8,4 22,4.5 22,5V8C22,8.6 21.8,9 21.4,9.4C21,9.8 20.6,10 20,10H18V13C18,14.1 17.6,15 16.8,15.8C16,16.6 15.1,17 14,17H8C6.9,17 6,16.6 5.2,15.8C4.4,15 4,14.1 4,13V3H9V5.4L7.2,6.8C7.1,6.9 7,7.1 7,7.2V11.5C7,11.8 7.2,12 7.5,12H11.5C11.8,12 12,11.8 12,11.5V7.2C12,7 11.9,6.9 11.8,6.8L10,5.4V3H20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'tea';
-->
