<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'wifi strength 4 alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-wifi-strength-4-alert"
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
    d="M12 3C7.8 3 3.7 4.4 .4 7C4.4 12.1 7.9 16.4 12 21.5C14.4 18.5 16.7 15.7 19 12.8V8H22.8C23 7.7 23.4 7.3 23.6 7C20.3 4.4 16.2 3 12 3M21 10V16H23V10M21 18V20H23V18"
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
