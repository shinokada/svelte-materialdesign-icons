<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'wave';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wave"
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
    d="M20,12C18.61,12 17.22,11.53 16,10.67C13.56,12.38 10.44,12.38 8,10.67C6.78,11.53 5.39,12 4,12H2V14H4C5.37,14 6.74,13.65 8,13C10.5,14.3 13.5,14.3 16,13C17.26,13.65 18.62,14 20,14H22V12"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'wave';
-->
