<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'quality low';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-quality-low"
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
    d="M14.5,13.5H16.5V10.5H14.5M18,14C18,14.6 17.6,15 17,15H16.25V16.5H14.75V15H14C13.4,15 13,14.6 13,14V10C13,9.4 13.4,9 14,9H17C17.6,9 18,9.4 18,10M19,4H5A2,2 0 0,0 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4M11,13.5V15H6V9H7.5V13.5H11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'quality low';
-->
