<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'escalator box';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-escalator-box"
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
    d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M14.34 6H17.05C18.16 6 19.05 6.9 19.05 8C19.05 9.11 18.16 10 17.05 10H16L10 18H7.05C5.95 18 5.05 17.11 5.05 16C5.05 14.9 5.95 14 7.05 14H8.34L14.34 6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'escalator box';
-->
