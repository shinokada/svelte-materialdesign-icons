<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'relation one to only one';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-relation-one-to-only-one"
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
    d="M22 15V17H21V19H19V17H18V19H16V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H16V13H18V15H19V13H21V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'relation one to only one';
-->
