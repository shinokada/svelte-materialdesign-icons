<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'decimal comma decrease';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-decimal-comma-decrease"
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
    d="M5 13V16H4L3 13A1 1 0 0 1 5 13M15 16V14L12 17L15 20V18H21V16M12 11A3 3 0 0 1 6 11V8A3 3 0 0 1 12 8M10 8A1 1 0 0 0 8 8V11A1 1 0 0 0 10 11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'decimal comma decrease';
-->
