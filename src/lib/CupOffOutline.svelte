<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cup off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cup-off-outline"
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
    d="M3.83 2L5.83 4H18.78L17.5 15.66L19.3 17.5L21 2M2.27 3L1 4.27L3.53 6.8L5 20.23C5.13 21.23 5.97 22 7 22H17C17.47 22 17.91 21.82 18.26 21.54L19.73 23L21 21.73M5.78 9.06L16.73 20H7Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cup off outline';
-->
