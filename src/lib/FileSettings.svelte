<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-settings"
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
    d="M6 0C4.89 0 4 .89 4 2V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V6L14 0H6M13 1.5L18.5 7H13V1.5M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file settings';
-->
