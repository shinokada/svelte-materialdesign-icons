<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'calendar export';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-calendar-export"
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
    d="M12 22L16 18H13V12H11V18H8L12 22M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H8L6 19H5V8H19V19H18L16 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3Z"
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
