<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'axis arrow';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-axis-arrow"
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
    d="M12,2L16,6H13V13.85L19.53,17.61L21,15.03L22.5,20.5L17,21.96L18.53,19.35L12,15.58L5.47,19.35L7,21.96L1.5,20.5L3,15.03L4.47,17.61L11,13.85V6H8L12,2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'axis arrow';
-->
