<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'card bulleted off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-card-bulleted-off-outline"
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
    d="M20.59,20.87L19.17,22.29L16.88,20H4A2,2 0 0,1 2,18V6C2,5.74 2.05,5.5 2.14,5.26L1.17,4.29L2.59,2.87L3.73,4L20.59,20.87V20.87M6.54,4H20A2,2 0 0,1 22,6V18C22,18.41 21.87,18.8 21.66,19.12L20,17.46V6H8.54L6.54,4M4,18H14.88L11.88,15H10V13.12L7.88,11H6V9.12L4,7.12V18M18,15H17.54L15.54,13H18V15M18,11H13.54L11.54,9H18V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'card bulleted off outline';
-->
