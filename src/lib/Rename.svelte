<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rename';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-rename"
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
    d="M15 16L11 20H21V16H15M12.06 7.19L3 16.25V20H6.75L15.81 10.94L12.06 7.19M18.71 8.04C19.1 7.65 19.1 7 18.71 6.63L16.37 4.29C16.17 4.09 15.92 4 15.66 4C15.41 4 15.15 4.1 14.96 4.29L13.13 6.12L16.88 9.87L18.71 8.04Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'rename';
-->
