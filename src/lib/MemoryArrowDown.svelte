<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'memory arrow down';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-memory-arrow-down"
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
    d="M19 19V15H17V19H15L18 22L21 19H19M12.1 19H11V21H9V19H7C5.9 19 5 18.1 5 17V15H3V13H5V11H3V9H5V7C5 5.9 5.9 5 7 5H9V3H11V5H13V3H15V5H17C18.1 5 19 5.9 19 7V9H21V11H19V12.1C18.7 12 18.3 12 18 12S17.3 12 17 12.1V7H7V17H12.1C12 17.3 12 17.7 12 18S12 18.7 12.1 19M9 15H12.8C13.3 14.1 14.1 13.3 15 12.8V9H9V15M11 11H13V13H11V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'memory arrow down';
-->
