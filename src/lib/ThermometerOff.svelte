<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'thermometer off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-thermometer-off"
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
    d="M11 7.8L9 5.8V5C9 3.34 10.34 2 12 2S15 3.34 15 5V11.8L11.2 8H13V5C13 4.45 12.55 4 12 4S11 4.45 11 5V7.8M22.11 21.46L2.39 1.73L1.11 3L9 10.89V13C6.79 14.66 6.34 17.79 8 20C9.66 22.21 12.79 22.66 15 21C15.84 20.37 16.4 19.5 16.71 18.6L20.84 22.73L22.11 21.46Z"
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
