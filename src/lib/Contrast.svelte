<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'contrast';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-contrast"
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
    d="M4.38,20.9C3.78,20.71 3.3,20.23 3.1,19.63L19.63,3.1C20.23,3.3 20.71,3.78 20.9,4.38L4.38,20.9M20,16V18H13V16H20M3,6H6V3H8V6H11V8H8V11H6V8H3V6Z"
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
