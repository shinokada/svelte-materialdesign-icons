<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'projector screen variant off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-projector-screen-variant-off-outline"
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
    d="M22.11 21.46L2.39 1.73L1.11 3L4.11 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H16.11L20.84 22.73L22.11 21.46M7 16V9H7.11L14.11 16H7M12.2 9L9.2 6H20C20.55 6 21 6.45 21 7V8C21 8.55 20.55 9 20 9H19V15.8L17 13.8V9H12.2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'projector screen variant off outline';
-->
