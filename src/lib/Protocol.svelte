<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'protocol';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-protocol"
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
    d="M18 20H14L18 4H22M16 4H12L8 20H12M2 16.5A2.5 2.5 0 0 0 4.5 19A2.5 2.5 0 0 0 7 16.5A2.5 2.5 0 0 0 4.5 14A2.5 2.5 0 0 0 2 16.5M2 9.5A2.5 2.5 0 0 0 4.5 12A2.5 2.5 0 0 0 7 9.5A2.5 2.5 0 0 0 4.5 7A2.5 2.5 0 0 0 2 9.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'protocol';
-->
