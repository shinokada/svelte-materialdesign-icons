<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'inbox multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-inbox-multiple"
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
    d="M19,8V5H5V8H9A3,3 0 0,0 12,11A3,3 0 0,0 15,8H19M19,3A2,2 0 0,1 21,5V12A2,2 0 0,1 19,14H5A2,2 0 0,1 3,12V5A2,2 0 0,1 5,3H19M3,15H9A3,3 0 0,0 12,18A3,3 0 0,0 15,15H21V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'inbox multiple';
-->
