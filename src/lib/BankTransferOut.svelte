<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'bank transfer out';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-bank-transfer-out"
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
    d="M15,15V12H18V10L22,13.5L18,17V15H15M14,8.7V10H2V8.7L8,5L14,8.7M2,17H14V19H2V17M7,11H9V16H7V11M3,11H5V16H3V11M11,11H13V16H11V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'bank transfer out';
-->
