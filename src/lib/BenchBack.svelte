<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'bench back';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-bench-back"
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
    d="M4 5C3.45 5 3 5.45 3 6V10C3 10.55 3.45 11 4 11H5V13H1V15H3V19H5V15H19V19H21V15H23V13H19V11H20C20.55 11 21 10.55 21 10V6C21 5.45 20.55 5 20 5H4M17 11V13H7V11H17Z"
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
