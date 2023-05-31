<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'bank off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-bank-off"
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
    d="M20.8 22.7L20.1 22H2V19H17.1L13 14.9V17H10V11.9L6.1 8H2V6L3.4 5.3L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M4 10V17H7V10H4M21 8V6L11.5 1L6.7 3.5L11.2 8H21M19 15.8V10H16V12.8L19 15.8Z"
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
