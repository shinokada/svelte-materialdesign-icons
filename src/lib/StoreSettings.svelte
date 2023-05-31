<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'store settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-store-settings"
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
    d="M20 6H4V4H20V6M21 12V14H20V20H18V14H14V20H4V14H3V12L4 7H20L21 12M12 14H6V18H12V14M7 24H9V22H7V24M11 24H13V22H11V24M15 24H17V22H15V24Z"
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
