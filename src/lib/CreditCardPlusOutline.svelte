<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'credit card plus outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-credit-card-plus-outline"
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
    d="M21,18H24V20H21V23H19V20H16V18H19V15H21V18M19,8V6H3V8H19M19,12H3V18H14V20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H19A2,2 0 0,1 21,6V13H19V12Z"
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
