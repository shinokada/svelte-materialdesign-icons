<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'basketball hoop outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-basketball-hoop-outline"
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
    d="M21,2H3A2,2 0 0,0 1,4V16A2,2 0 0,0 3,18H6.57L8,23L10,21L12,23L14,21L16,23L17.43,18H21A2,2 0 0,0 23,16V4A2,2 0 0,0 21,2M21,16H18V14H17V9A2,2 0 0,0 15,7H9A2,2 0 0,0 7,9V14H6V16H3V4H21V16M9,14V9H15V14H9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'basketball hoop outline';
-->
