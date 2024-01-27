<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'stamper';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-stamper"
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
    d="M12,3A3,3 0 0,0 9,6C9,9 14,13 6,13A2,2 0 0,0 4,15V17H20V15A2,2 0 0,0 18,13C10,13 15,9 15,6C15,4 13.66,3 12,3M6,19V21H18V19H6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'stamper';
-->
