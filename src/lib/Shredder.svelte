<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'shredder';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-shredder"
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
    d="M6,3V7H8V5H16V7H18V3H6M5,8A3,3 0 0,0 2,11V17H5V14H19V17H22V11A3,3 0 0,0 19,8H5M18,10A1,1 0 0,1 19,11A1,1 0 0,1 18,12A1,1 0 0,1 17,11A1,1 0 0,1 18,10M7,16V21H9V16H7M11,16V20H13V16H11M15,16V21H17V16H15Z"
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
