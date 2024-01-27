<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'signal variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-signal-variant"
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
    d="M4,6V4H4.1C12.9,4 20,11.1 20,19.9V20H18V19.9C18,12.2 11.8,6 4,6M4,10V8A12,12 0 0,1 16,20H14A10,10 0 0,0 4,10M4,14V12A8,8 0 0,1 12,20H10A6,6 0 0,0 4,14M4,16A4,4 0 0,1 8,20H4V16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'signal variant';
-->
