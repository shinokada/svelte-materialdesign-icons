<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'room service';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-room-service"
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
    d="M12,5A2,2 0 0,1 14,7C14,7.24 13.96,7.47 13.88,7.69C17.95,8.5 21,11.91 21,16H3C3,11.91 6.05,8.5 10.12,7.69C10.04,7.47 10,7.24 10,7A2,2 0 0,1 12,5M22,19H2V17H22V19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'room service';
-->
