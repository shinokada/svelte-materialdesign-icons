<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'auto upload';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-auto-upload"
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
    d="M5.35,12.65L6.5,9L7.65,12.65M5.5,7L2.3,16H4.2L4.9,14H8.1L8.8,16H10.7L7.5,7M11,20H22V18H11M14,16H19V11H22L16.5,5.5L11,11H14V16Z"
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
