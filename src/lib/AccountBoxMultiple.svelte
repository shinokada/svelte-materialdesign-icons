<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'account box multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-account-box-multiple"
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
    d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H8A2,2 0 0,1 6,16V4A2,2 0 0,1 8,2H20M17,7A3,3 0 0,0 14,4A3,3 0 0,0 11,7A3,3 0 0,0 14,10A3,3 0 0,0 17,7M8,15V16H20V15C20,13 16,11.9 14,11.9C12,11.9 8,13 8,15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'account box multiple';
-->
