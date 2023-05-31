<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'playlist minus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-playlist-minus"
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
  viewBox="0 0 24 24"><path d="M3 16H10V14H3M12 14V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z" /></svg
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
