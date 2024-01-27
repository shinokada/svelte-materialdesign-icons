<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cellphone settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cellphone-settings"
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
    d="M16,16H8V4H16M16,0H8A2,2 0 0,0 6,2V18A2,2 0 0,0 8,20H16A2,2 0 0,0 18,18V2A2,2 0 0,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cellphone settings';
-->
