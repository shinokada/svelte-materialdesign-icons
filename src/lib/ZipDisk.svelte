<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'zip disk';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-zip-disk"
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
    d="M7,3L3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5L17,3V5A1,1 0 0,1 16,6H10A1,1 0 0,1 9,5V3H7M8,10H16A1,1 0 0,1 17,11V19H7V11A1,1 0 0,1 8,10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'zip disk';
-->
