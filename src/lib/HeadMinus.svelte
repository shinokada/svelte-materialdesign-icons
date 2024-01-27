<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'head minus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-head-minus"
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
    d="M13 3C9.2 3 6.2 5.9 6 9.7L4.1 12.2C3.9 12.5 4.1 13 4.5 13H6V16C6 17.1 6.9 18 8 18H9V21H16V16.3C18.4 15.2 20 12.8 20 10C20 6.1 16.9 3 13 3M17 10H9V8H17V10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'head minus';
-->
