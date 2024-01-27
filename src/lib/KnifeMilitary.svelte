<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'knife military';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-knife-military"
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
    d="M22,2L17.39,3.75L10.46,10.68L14,14.22L20.92,7.29C22.43,5.78 22,2 22,2M8.33,10L6.92,11.39L8.33,12.8L2.68,18.46L6.21,22L11.87,16.34L13.28,17.76L14.7,16.34L8.33,10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'knife military';
-->
