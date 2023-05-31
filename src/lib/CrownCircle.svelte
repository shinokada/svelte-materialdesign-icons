<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'crown circle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-crown-circle"
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
    d="M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M16 15.44C16 15.78 15.78 16 15.44 16H8.56C8.22 16 8 15.78 8 15.44V15H16V15.44M16 14H8L7 8L10 10L12 7L14 10L17 8L16 14Z"
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
