<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'prescription';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-prescription"
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
    d="M4,4V10L4,14H6V10H8L13.41,15.41L9.83,19L11.24,20.41L14.83,16.83L18.41,20.41L19.82,19L16.24,15.41L19.82,11.83L18.41,10.41L14.83,14L10.83,10H11A3,3 0 0,0 14,7A3,3 0 0,0 11,4H4M6,6H11A1,1 0 0,1 12,7A1,1 0 0,1 11,8H6V6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'prescription';
-->
