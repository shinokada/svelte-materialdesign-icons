<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'delete alert outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-delete-alert-outline"
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
    d="M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M6 9V19H14V9H6M13.5 4H17V6H3V4H6.5L7.5 3H12.5L13.5 4M19 17V15H21V17H19M19 13V7H21V13H19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'delete alert outline';
-->
