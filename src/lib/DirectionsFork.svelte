<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'directions fork';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-directions-fork"
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
    d="M3,4V12.5L6,9.5L9,13C10,14 10,15 10,15V21H14V14C14,14 14,13 13.47,12C12.94,11 12,10 12,10L9,6.58L11.5,4M18,4L13.54,8.47L14,9C14,9 14.93,10 15.47,11C15.68,11.4 15.8,11.79 15.87,12.13L21,7"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'directions fork';
-->
