<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'kickstarter';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-kickstarter"
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
    d="M19.3 10.2L17.5 12L19.3 13.8C21.19 15.67 21.19 18.72 19.3 20.59C17.42 22.46 14.35 22.46 12.47 20.59L11.8 19.93C10.93 21.19 9.5 22 7.83 22C5.16 22 3 19.85 3 17.2V6.8C3 4.15 5.16 2 7.83 2C9.5 2 10.93 2.82 11.8 4.07L12.47 3.41C14.35 1.54 17.42 1.54 19.3 3.41C21.19 5.28 21.19 8.33 19.3 10.2Z"
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
