<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cellphone check';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cellphone-check"
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
    d="M14.54 23H7C5.9 23 5 22.11 5 21V3C5 1.89 5.89 1 7 1H17C18.1 1 19 1.89 19 3V13C18.3 13 17.63 13.13 17 13.35V5H7V19H13C13 20.54 13.58 21.94 14.54 23M17.75 22.16L15 19.16L16.16 18L17.75 19.59L21.34 16L22.5 17.41L17.75 22.16"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cellphone check';
-->
