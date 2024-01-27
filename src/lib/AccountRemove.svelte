<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'account remove';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-account-remove"
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
    d="M15,14C17.67,14 23,15.33 23,18V20H7V18C7,15.33 12.33,14 15,14M15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12M5,9.59L7.12,7.46L8.54,8.88L6.41,11L8.54,13.12L7.12,14.54L5,12.41L2.88,14.54L1.46,13.12L3.59,11L1.46,8.88L2.88,7.46L5,9.59Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'account remove';
-->
