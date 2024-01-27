<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'camera document';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-camera-document"
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
    d="M21 7V22H3V20H19V7H14.72C14.38 7.6 13.74 8 13 8C13 9.11 12.1 10 11 10H8C6.9 10 6 9.1 6 8V4C6 2.9 6.9 2 8 2H11C12.1 2 13 2.9 13 4C13.74 4 14.38 4.41 14.72 5H19C20.11 5 21 5.89 21 7M6 15H13L11 11H8L6 15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'camera document';
-->
