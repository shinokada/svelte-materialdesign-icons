<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'checkbox blank off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-checkbox-blank-off-outline"
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
    d="M22.11 21.46L2.39 1.73L1.11 3L3 4.9V19C3 20.11 3.9 21 5 21H19.1L20.84 22.73L22.11 21.46M5 19V6.89L17.11 19H5M8.2 5L6.2 3H19C20.1 3 21 3.89 21 5V17.8L19 15.8V5H8.2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'checkbox blank off outline';
-->
