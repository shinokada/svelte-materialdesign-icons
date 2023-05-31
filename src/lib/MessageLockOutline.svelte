<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'message lock outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-message-lock-outline"
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
    d="M23 3V2.5C23 1.1 21.9 0 20.5 0S18 1.1 18 2.5V3C17.5 3 17 3.5 17 4V8C17 8.5 17.5 9 18 9H23C23.5 9 24 8.5 24 8V4C24 3.5 23.5 3 23 3M22 3H19V2.5C19 1.7 19.7 1 20.5 1S22 1.7 22 2.5V3M22 11V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H15V4H4V17.2L5.2 16H20V11H22Z"
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
