<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wind turbine';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wind-turbine"
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
    d="M13.33,11.67L16.21,14.58C17.62,13.16 16.21,11.75 16.21,11.75L14.72,10.24C14.9,9.86 15,9.44 15,9C15,7.95 14.46,7.03 13.64,6.5L15,2.11C13.09,1.53 12.5,3.44 12.5,3.44L11.69,6.03C10.46,6.16 9.46,7 9.13,8.18L4.67,9.63C5.31,11.53 7.2,10.9 7.2,10.9L9.27,10.23C9.61,10.97 10.23,11.54 11,11.82V19C11,19 9,19 9,21C9,21.5 9,21.81 9,22H15V21C15,21 15,19 13,19V11.82C13.12,11.78 13.23,11.72 13.33,11.67M10.5,9A1.5,1.5 0 0,1 12,7.5A1.5,1.5 0 0,1 13.5,9A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 10.5,9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wind turbine';
-->
