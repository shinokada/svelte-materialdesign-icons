<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'roller skate';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-roller-skate"
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
    d="M6.5 18C5.1 18 4 19.12 4 20.5S5.1 23 6.5 23 9 21.88 9 20.5 7.86 18 6.5 18M16.5 18C15.1 18 14 19.12 14 20.5S15.1 23 16.5 23 19 21.88 19 20.5 17.86 18 16.5 18M20 17C20 15.63 20.09 13.81 19.5 12.95C18.55 10.9 15.82 10.56 13.91 10.05C13 10 12 9 11.82 8H9C8.71 8 8.5 7.78 8.5 7.5C8.5 7.22 8.71 7 9 7H11.5V6H9C8.71 6 8.5 5.78 8.5 5.5C8.5 5.22 8.71 5 9 5H11.5V2H3V17H20Z"
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
