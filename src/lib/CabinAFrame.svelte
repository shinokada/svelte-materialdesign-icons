<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cabin a frame';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cabin-a-frame"
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
    d="M12 3L4 21H20L12 3M9 19H7.08L9 14.67V19M13 19H11V14H13V19M10.19 12L12 7.92L13.81 12H10.19M15 14.67L16.92 19H15V14.67Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cabin a frame';
-->
