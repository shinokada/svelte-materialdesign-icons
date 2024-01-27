<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'page previous';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-page-previous"
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
    d="M4,21H19A2,2 0 0,0 21,19V13H17V15L13,12L17,9V11H21V5A2,2 0 0,0 19,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21M4,15H8V17H4V15M4,11H11V13H4V11M4,7H11V9H4V7M21,11H24V13H21V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'page previous';
-->
