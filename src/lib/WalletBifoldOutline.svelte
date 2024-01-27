<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wallet bifold outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wallet-bifold-outline"
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
    d="M15.5 15.5C16.33 15.5 17 14.83 17 14C17 13.17 16.33 12.5 15.5 12.5C14.67 12.5 14 13.17 14 14C14 14.83 14.67 15.5 15.5 15.5M7 3H17C18.11 3 19 3.9 19 5V7C20.11 7 21 7.9 21 9V19C21 20.11 20.11 21 19 21H7C4.79 21 3 19.21 3 17V7C3 4.79 4.79 3 7 3M17 7V5H7C5.9 5 5 5.9 5 7V7.54C5.59 7.2 6.27 7 7 7H17M5 17C5 18.11 5.9 19 7 19H19V9H7C5.9 9 5 9.9 5 11V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wallet bifold outline';
-->
