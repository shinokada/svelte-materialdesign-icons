<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'message fast';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-message-fast"
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
    d="M3 7C2.4 7 2 7.4 2 8S2.4 9 3 9H5V7H3M2 11C1.4 11 1 11.4 1 12S1.4 13 2 13H5V11H2M1 15C.4 15 0 15.4 0 16C0 16.6 .4 17 1 17H5V15H1M20 5H9C7.9 5 7 5.9 7 7V21L11 17H20C21.1 17 22 16.1 22 15V7C22 5.9 21.1 5 20 5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'message fast';
-->
