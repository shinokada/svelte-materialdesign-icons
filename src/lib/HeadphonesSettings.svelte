<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'headphones settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-headphones-settings"
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
    d="M12,1A9,9 0 0,1 21,10V17A3,3 0 0,1 18,20H15V12H19V10A7,7 0 0,0 12,3A7,7 0 0,0 5,10V12H9V20H6A3,3 0 0,1 3,17V10A9,9 0 0,1 12,1M15,24V22H17V24H15M11,24V22H13V24H11M7,24V22H9V24H7Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'headphones settings';
-->
