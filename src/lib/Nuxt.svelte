<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'nuxt';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-nuxt"
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
    d="M21.8 18.36L16.03 8.08C15.93 8 15.63 7.43 15.03 7.43C14.78 7.43 14.43 7.53 14.07 8.08L13.33 9.26L11.31 5.65C11.26 5.55 10.91 5 10.31 5C10.06 5 9.66 5.1 9.36 5.65L2.18 18.31C2.13 18.41 1.83 19 2.13 19.5C2.23 19.75 2.53 20 3.19 20H20.85C20.95 20 21.6 20 21.9 19.5C22 19.26 22.1 18.86 21.8 18.36M8.1 18.31L7.95 18.86H3.24L10.36 6.34L12.66 10.47L8.1 18.31M9.21 18.86L13.32 11.66L17.5 18.86H9.21M18.74 18.86L18.54 18.31L14 10.46L15.03 8.73L20.75 18.86H18.74Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'nuxt';
-->
