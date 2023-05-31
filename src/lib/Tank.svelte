<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'tank';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-tank"
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
    d="M20,12H4V11H6L7,6H12L13,11H20V12M13.22,7L13.62,9H22V7H13.22M22,16A3,3 0 0,1 19,19H5A3,3 0 0,1 2,16A3,3 0 0,1 5,13H19A3,3 0 0,1 22,16M6,16A1,1 0 0,0 5,15A1,1 0 0,0 4,16A1,1 0 0,0 5,17A1,1 0 0,0 6,16M13,16A1,1 0 0,0 12,15A1,1 0 0,0 11,16A1,1 0 0,0 12,17A1,1 0 0,0 13,16M20,16A1,1 0 0,0 19,15A1,1 0 0,0 18,16A1,1 0 0,0 19,17A1,1 0 0,0 20,16Z"
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
