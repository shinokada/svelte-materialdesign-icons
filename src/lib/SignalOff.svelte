<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'signal off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-signal-off"
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
    d="M18,3V16.18L21,19.18V3H18M4.28,5L3,6.27L10.73,14H8V21H11V14.27L13,16.27V21H16V19.27L19.73,23L21,21.72L4.28,5M13,9V11.18L16,14.18V9H13M3,18V21H6V18H3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'signal off';
-->
