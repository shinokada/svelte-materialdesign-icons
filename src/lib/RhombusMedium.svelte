<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rhombus medium';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-rhombus-medium"
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
    d="M12 6.46C11.72 6.46 11.44 6.56 11.22 6.78L6.78 11.22C6.35 11.65 6.35 12.35 6.78 12.78L11.22 17.22C11.65 17.65 12.35 17.65 12.78 17.22L17.22 12.78C17.65 12.35 17.65 11.65 17.22 11.22L12.78 6.78C12.56 6.56 12.28 6.46 12 6.46Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'rhombus medium';
-->
