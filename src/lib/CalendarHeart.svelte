<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'calendar heart';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-calendar-heart"
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
    d="M19 19V8H5V19H19M16 1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1M12 17.17L11.42 16.64C9.36 14.77 8 13.54 8 12.03C8 10.8 8.97 9.83 10.2 9.83C10.9 9.83 11.56 10.15 12 10.66C12.44 10.15 13.1 9.83 13.8 9.83C15.03 9.83 16 10.8 16 12.03C16 13.54 14.64 14.77 12.58 16.64L12 17.17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'calendar heart';
-->
