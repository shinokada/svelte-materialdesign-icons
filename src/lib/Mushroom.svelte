<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'mushroom';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-mushroom"
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
    d="M12,2A10,10 0 0,1 22,12A2,2 0 0,1 20,14H4A2,2 0 0,1 2,12A10,10 0 0,1 12,2M12,8A2,2 0 0,0 14,6A2,2 0 0,0 12,4A2,2 0 0,0 10,6A2,2 0 0,0 12,8M17,12A2,2 0 0,0 19,10A2,2 0 0,0 17,8A2,2 0 0,0 15,10A2,2 0 0,0 17,12M7,12A2,2 0 0,0 9,10A2,2 0 0,0 7,8A2,2 0 0,0 5,10A2,2 0 0,0 7,12M15,15L16.27,19.45L16.35,20C16.35,21.1 15.45,22 14.35,22H9.65A2,2 0 0,1 7.65,20L7.73,19.45L9,15H15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'mushroom';
-->
