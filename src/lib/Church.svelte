<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'church';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-church"
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
    d="M18 12.22V9L13 6.5V5H15V3H13V1H11V3H9V5H11V6.5L6 9V12.22L2 14V22H10V19C10 17.9 10.9 17 12 17S14 17.9 14 19V22H22V14L18 12.22M12 13.5C11.17 13.5 10.5 12.83 10.5 12S11.17 10.5 12 10.5 13.5 11.17 13.5 12 12.83 13.5 12 13.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'church';
-->
