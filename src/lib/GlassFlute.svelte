<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'glass flute';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-glass-flute"
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
    d="M8,2H16C15.67,5 15.33,8 14.75,9.83C14.17,11.67 13.33,12.33 12.92,14.08C12.5,15.83 12.5,18.67 13.08,20C13.67,21.33 14.83,21.17 15.42,21.25C16,21.33 16,21.67 16,22H8C8,21.67 8,21.33 8.58,21.25C9.17,21.17 10.33,21.33 10.92,20C11.5,18.67 11.5,15.83 11.08,14.08C10.67,12.33 9.83,11.67 9.25,9.83C8.67,8 8.33,5 8,2M10,4C10.07,5.03 10.15,6.07 10.24,7H13.76C13.85,6.07 13.93,5.03 14,4H10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'glass flute';
-->
