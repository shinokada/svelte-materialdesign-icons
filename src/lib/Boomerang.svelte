<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'boomerang';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-boomerang"
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
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
    d="M10 2H4C2.9 2 2 2.9 2 4S2.9 6 4 6H8L10 2M18 2C20.2 2 22 3.8 22 6V12L18 14C18 9.6 14.4 6 10 6L12 2H18M18 20V16L22 14V20C22 21.1 21.1 22 20 22S18 21.1 18 20Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-materialdesign-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
