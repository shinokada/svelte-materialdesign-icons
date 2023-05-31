<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'backspace reverse';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-backspace-reverse"
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
    d="M2,21H17C17.7,21 18.2,20.6 18.6,20.1L24,12L18.6,3.9C18.2,3.4 17.7,3 17,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21M5,8.4L6.4,7L10,10.6L13.6,7L15,8.4L11.4,12L15,15.6L13.6,17L10,13.4L6.4,17L5,15.6L8.6,12"
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
