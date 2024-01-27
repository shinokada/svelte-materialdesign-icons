<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'debug step out';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-debug-step-out"
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
    d="M12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22M13,16H11V6L6.5,10.5L5.08,9.08L12,2.16L18.92,9.08L17.5,10.5L13,6V16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'debug step out';
-->
