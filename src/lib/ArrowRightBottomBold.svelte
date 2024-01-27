<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow right bottom bold';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-arrow-right-bottom-bold"
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
    d="M3 3H7V10.5C7 12.43 8.57 14 10.5 14H13V10L20 16L13 22V18H10.5C6.36 18 3 14.64 3 10.5V3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'arrow right bottom bold';
-->
