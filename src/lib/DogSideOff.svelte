<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'dog side off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-dog-side-off"
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
    d="M18 10L15 7L19 3V5L22 8L20 10L19 9L18 10M17 11L14 8L13 9H12.2L17 13.8V11M2.39 1.73L1.11 3L7.11 9H5L3 7L2 8L5 11V14L4 15V21H6V18L8 15H13.11L15 16.89V21H17V18.89L20.84 22.73L22.11 21.46L2.39 1.73Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'dog side off';
-->
