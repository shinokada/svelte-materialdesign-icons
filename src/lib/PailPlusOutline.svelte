<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'pail plus outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-pail-plus-outline"
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
    d="M4 6H3V4H21V6H20L18.6 13C17.83 13.07 17.11 13.26 16.45 13.58L17.96 6H6.04L6.5 8.22L4.65 9.27L4 6M12.86 8C12.58 7.5 11.97 7.35 11.5 7.63L3.27 12.38C2.79 12.66 2.62 13.27 2.9 13.75C3.18 14.23 3.79 14.39 4.27 14.11L12.5 9.36C12.97 9.09 13.14 8.47 12.86 8M13 19H8.64L7.73 14.43L5.9 15.5L7 21H13.35C13.13 20.37 13 19.7 13 19M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'pail plus outline';
-->
