<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'instrument triangle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-instrument-triangle"
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
    d="M11.5 2H10.5V6.2C10.4 6.3 10.3 6.3 10.2 6.5L2.1 20.7C1.8 21.3 2.2 22 2.9 22H16V20H4.8L11 9.2L16.7 19.2L18.4 18.2L11.8 6.4L11.5 6.1V2M21 6H20V18L19.5 22H21.5L21 18V6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'instrument triangle';
-->
