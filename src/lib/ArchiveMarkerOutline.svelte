<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'archive marker outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-archive-marker-outline"
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
    d="M14.5 11C14.72 11 14.9 11.14 14.97 11.33C14.42 11.79 13.96 12.36 13.63 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5M21 9H3V3H21V9M19 5H5V7H19V5M6 19V10H4V21H15.19C14.78 20.4 14.36 19.72 14 19H6M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'archive marker outline';
-->
