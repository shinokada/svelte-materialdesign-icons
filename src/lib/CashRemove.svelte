<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cash remove';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cash-remove"
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
    d="M15.46 18.12L16.88 19.54L19 17.41L21.12 19.54L22.54 18.12L20.41 16L22.54 13.88L21.12 12.46L19 14.59L16.88 12.46L15.46 13.88L17.59 16M14.97 11.62C14.86 10.28 13.58 8.97 12 9C10.3 9.04 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.39 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.62M13 16H7C7 14.9 6.1 14 5 14V10C6.1 10 7 9.1 7 8H17C17 9.1 17.9 10 19 10V10.05C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cash remove';
-->
