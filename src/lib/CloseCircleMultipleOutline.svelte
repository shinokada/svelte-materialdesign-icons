<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'close circle multiple outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-close-circle-multiple-outline"
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
    d="M18.54 9.88L17.12 8.47L15 10.59L12.88 8.47L11.47 9.88L13.59 12L11.47 14.12L12.88 15.54L15 13.41L17.12 15.54L18.54 14.12L16.41 12M2 12C2 9.21 3.64 6.8 6 5.68V3.5C2.5 4.76 0 8.09 0 12S2.5 19.24 6 20.5V18.32C3.64 17.2 2 14.79 2 12M15 3C10.04 3 6 7.04 6 12S10.04 21 15 21 24 16.96 24 12 19.96 3 15 3M15 19C11.14 19 8 15.86 8 12S11.14 5 15 5 22 8.14 22 12 18.86 19 15 19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'close circle multiple outline';
-->
