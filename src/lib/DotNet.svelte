<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'dot net';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-dot-net"
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
    d="M2,15A1,1 0 0,1 3,16A1,1 0 0,1 2,17A1,1 0 0,1 1,16A1,1 0 0,1 2,15M21,17H19V9H17V7H23V9H21V17M16,7V9H14V11H16V13H14V15H16V17H12V7H16M11,7V17H9L6,11V17H4V7H6L9,13V7H11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'dot net';
-->
