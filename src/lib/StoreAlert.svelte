<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'store alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-store-alert"
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
    d="M2 7L1 12V14H2V20H12V14H16V20H18V14H19V12L18 7H2M10 18H4V14H10V18M18 6H2V4H18V6M23 7V13H21V7H23M21 15H23V17H21V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'store alert';
-->
