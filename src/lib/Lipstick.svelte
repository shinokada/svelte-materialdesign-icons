<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'lipstick';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-lipstick"
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
    d="M9 23C8.45 23 8 22.55 8 22V13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13V22C16 22.55 15.55 23 15 23H9M10 11C9.45 11 9 10.55 9 10V5.25C9 5.25 11 3 11.75 1C12.83 1.67 13.92 2.33 14.46 3.83C15 5.33 15 7.67 15 10C15 10.55 14.55 11 14 11H10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'lipstick';
-->
