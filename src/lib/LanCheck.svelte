<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'lan check';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-lan-check"
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
    d="M4 1C2.89 1 2 1.89 2 3V7C2 8.11 2.89 9 4 9H1V11H13V9H10C11.11 9 12 8.11 12 7V3C12 1.89 11.11 1 10 1H4M4 3H10V7H4V3M14 13C12.89 13 12 13.89 12 15V19C12 20.11 12.89 21 14 21H11V23H23V21H20C21.11 21 22 20.11 22 19V15C22 13.89 21.11 13 20 13H14M14 15H20V19H14V15M5.5 20.5L10.5 15.5L9 14L5.5 17.5L3.5 15.5L2 17L5.5 20.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'lan check';
-->
