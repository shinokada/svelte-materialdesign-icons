<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'car settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-car-settings"
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
    d="M15 22H17V24H15M11 22H13V24H11M7 22H9V24H7M5 11L6.5 6.5H17.5L19 11M17.5 16A1.5 1.5 0 0 1 16 14.5A1.5 1.5 0 0 1 17.5 13A1.5 1.5 0 0 1 19 14.5A1.5 1.5 0 0 1 17.5 16M6.5 16A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 0 0 4 21H5A1 1 0 0 0 6 20V19H18V20A1 1 0 0 0 19 21H20A1 1 0 0 0 21 20V12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'car settings';
-->
