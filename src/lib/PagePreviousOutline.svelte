<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'page previous outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-page-previous-outline"
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
    d="M2,3H19A2,2 0 0,1 21,5V9H19V5H2V19H19V15H21V19A2,2 0 0,1 19,21H2A2,2 0 0,1 0,19V5A2,2 0 0,1 2,3M17,15V13H24V11H17V9L13,12L17,15M4,13H11V11H4V13M4,9H11V7H4V9M4,17H8V15H4V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'page previous outline';
-->
