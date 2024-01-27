<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'high definition box';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-high-definition-box"
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
    d="M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11V15M13,9H17A1,1 0 0,1 18,10V14A1,1 0 0,1 17,15H13V9M14.5,13.5H16.5V10.5H14.5V13.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'high definition box';
-->
