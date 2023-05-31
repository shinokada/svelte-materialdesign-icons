<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'play outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-play-outline"
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
  viewBox="0 0 24 24"><path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12" /></svg
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
