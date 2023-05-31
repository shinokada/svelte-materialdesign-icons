<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'printer pos alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-printer-pos-alert"
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
    d="M16 10H4C2.9 10 2 10.9 2 12V19H18V12C18 10.9 17.11 10 16 10M16 14H12V12H16V14M15 9H5V4H15V9M22 7V13H20V7H22M20 15H22V17H20V15Z"
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
