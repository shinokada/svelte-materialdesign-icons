<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'email open multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-email-open-multiple"
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
    d="M6,8L14,13L22,8V8L14,3L6,8V8M24,8V18A2,2 0 0,1 22,20H6A2,2 0 0,1 4,18V8C4,7.27 4.39,6.64 4.97,6.29L14,0.64L23.03,6.29C23.61,6.64 24,7.27 24,8M2,8V22H20V24H2A2,2 0 0,1 0,22V8H2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'email open multiple';
-->
