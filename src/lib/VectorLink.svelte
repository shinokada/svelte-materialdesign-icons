<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'vector link';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-vector-link"
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
    d="M3 1C1.89 1 1 1.89 1 3V14C1 15.11 1.89 16 3 16H14C15.11 16 16 15.11 16 14V11H14V14H3V3H14V5H16V3C16 1.89 15.11 1 14 1M9 7C7.89 7 7 7.89 7 9V12H9V9H20V20H9V18H7V20C7 21.11 7.89 22 9 22H20C21.11 22 22 21.11 22 20V9C22 7.89 21.11 7 20 7H9"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'vector link';
-->
