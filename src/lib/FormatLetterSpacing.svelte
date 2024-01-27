<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'format letter spacing';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-format-letter-spacing"
  width={size}
  height={size}
  fill={color}
  {...$$restProps}
  {role}
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
    d="M14.4 10.7H18.5L16.5 5.3L14.4 10.7M15.6 3H17.3L22 15H20.1L19.1 12.4H13.7L12.7 15H10.8L15.6 3M11.2 3H13.1L8.4 15H6.7L2 3H3.9L7.5 12.7M19 22V20H5V22L2 19L5 16V18H19V16L22 19L19 22Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'format letter spacing';
-->
