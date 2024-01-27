<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow projectile';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-arrow-projectile"
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
  ><path d="M22 2L20 7L19.03 6.03L8 17.06V19L5 22L4 20L2 19L5 16H6.94L17.97 4.97L17 4L22 2Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'arrow projectile';
-->
