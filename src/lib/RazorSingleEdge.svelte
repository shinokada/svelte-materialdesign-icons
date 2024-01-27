<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'razor single edge';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-razor-single-edge"
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
    d="M22 5V8H2V5H22M22 13V18H2V13H3.5C4.33 13 5 12.33 5 11.5S4.33 10 3.5 10L2 10V9H22V10H20.5C19.67 10 19 10.67 19 11.5S19.67 13 20.5 13H22M13 11C13 10.45 12.55 10 12 10S11 10.45 11 11V13C11 13.55 11.45 14 12 14S13 13.55 13 13V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'razor single edge';
-->
