<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wind turbine alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wind-turbine-alert"
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
    d="M12.33 11.67L15.21 14.58C16.62 13.16 15.21 11.75 15.21 11.75L13.72 10.24C13.9 9.86 14 9.44 14 9C14 7.95 13.46 7.03 12.64 6.5L14 2.11C12.09 1.53 11.5 3.44 11.5 3.44L10.69 6.03C9.46 6.16 8.46 7 8.13 8.18L3.67 9.63C4.31 11.53 6.2 10.9 6.2 10.9L8.27 10.23C8.61 10.97 9.23 11.54 10 11.82V19C10 19 8 19 8 21V22H14V21C14 21 14 19 12 19V11.82C12.12 11.78 12.23 11.72 12.33 11.67M9.5 9C9.5 8.17 10.17 7.5 11 7.5S12.5 8.17 12.5 9 11.83 10.5 11 10.5 9.5 9.83 9.5 9M18 12V7H20V13H18M18 17V15H20V17H18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wind turbine alert';
-->
