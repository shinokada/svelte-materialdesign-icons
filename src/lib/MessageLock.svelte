<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'message lock';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-message-lock"
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
    d="M20.5 0A2.5 2.5 0 0 0 18 2.5V3A1 1 0 0 0 17 4V8A1 1 0 0 0 18 9H23A1 1 0 0 0 24 8V4A1 1 0 0 0 23 3V2.5A2.5 2.5 0 0 0 20.5 0M20.5 1A1.5 1.5 0 0 1 22 2.5V3H19V2.5A1.5 1.5 0 0 1 20.5 1M4 2A2 2 0 0 0 2 4V22L6 18H20A2 2 0 0 0 22 16V11H17C15.89 11 15 10.11 15 9V2H4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'message lock';
-->
