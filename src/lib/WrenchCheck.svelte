<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wrench check';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wrench-check"
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
    d="M9 2C10.8 2.6 12 4.3 12 6.2C12 8.2 10.8 9.9 9 10.5V21.5C9 21.8 8.8 22 8.5 22H6.5C6.2 22 6 21.8 6 21.4V10.4C4.2 9.8 3 8.1 3 6.2S4.2 2.6 6 2V5.7H9V2M20.6 13L22 14.41L15.47 21L12 17.5L13.4 16.09L15.47 18.17L20.6 13"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wrench check';
-->
