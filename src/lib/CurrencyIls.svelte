<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'currency ils';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-currency-ils"
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
    d="M22,16A5,5 0 0,1 17,21H8V9H10V19H17A3,3 0 0,0 20,16V3H22V16M16,8V15H14V8A3,3 0 0,0 11,5H4V21H2V3H11A5,5 0 0,1 16,8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'currency ils';
-->
