<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'download lock outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-download-lock-outline"
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
    d="M22 16A1.08 1.08 0 0 1 23 17V21A1.08 1.08 0 0 1 22 22H17A1.08 1.08 0 0 1 16 21V17A1.08 1.08 0 0 1 17 16V14.5A2.5 2.5 0 0 1 22 14.5V16M21 16V14.5A1.5 1.5 0 0 0 18 14.5V16H21M13 5V11H14.17L12 13.17L9.83 11H11V5H13M15 3H9V9H5L12 16L19 9H15V3M14 18H5V20H14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'download lock outline';
-->
