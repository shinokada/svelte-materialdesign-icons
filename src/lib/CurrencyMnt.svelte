<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'currency mnt';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-currency-mnt"
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
    d="M13 5V8.62L17 7.17V9.29L13 10.74V12.5L17 11.07V13.2L13 14.65V21H11V15.38L7 16.84V14.71L11 13.24V11.47L7 12.92V10.8L11 9.35V5H5V3H19V5H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'currency mnt';
-->
