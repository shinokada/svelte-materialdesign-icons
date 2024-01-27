<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wifi strength 3 alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wifi-strength-3-alert"
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
    d="M12 3C7.8 3 3.7 4.4 .4 7C4.4 12.1 7.9 16.4 12 21.5C14.4 18.5 16.7 15.7 19 12.8V9.6L18.8 9.9C17.3 9 14.9 8 12 8C9 8 6.7 9 5.2 9.8L3.3 7.4C5.9 5.8 8.9 5 12 5S18.1 5.9 20.7 7.4L20.3 8H22.9C23.1 7.7 23.5 7.3 23.7 7C20.3 4.4 16.2 3 12 3M21 10V16H23V10M21 18V20H23V18"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wifi strength 3 alert';
-->
