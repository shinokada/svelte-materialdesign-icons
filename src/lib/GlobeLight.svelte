<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'globe light';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-globe-light"
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
    d="M7.1 10C8.1 9 9.5 8.3 11 8.1V2H13V8.1C14.5 8.3 15.9 9 16.9 10H7.1M5.3 13C5.1 13.6 5 14.3 5 15C5 18.9 8.1 22 12 22S19 18.9 19 15C19 14.3 18.9 13.6 18.7 13H5.3Z"
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
