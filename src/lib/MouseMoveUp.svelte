<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'mouse move up';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-mouse-move-up"
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
    d="M7 9H2C2 6.04 4.17 3.57 7 3.09V9M18 17H20V11H23L19 7L15 11H18V17M9 3.09V9H14C14 6.04 11.83 3.57 9 3.09M2 15C2 18.3 4.7 21 8 21S14 18.3 14 15V11H2V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'mouse move up';
-->
