<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'lambda';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-lambda"
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
    d="M6,20L10.16,7.91L9.34,6H8V4H10C10.42,4 10.78,4.26 10.93,4.63L16.66,18H18V20H16C15.57,20 15.21,19.73 15.07,19.36L11.33,10.65L8.12,20H6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'lambda';
-->
