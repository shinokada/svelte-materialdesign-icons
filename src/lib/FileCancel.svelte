<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file cancel';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-cancel"
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
    d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M10.5,11C8,11 6,13 6,15.5C6,18 8,20 10.5,20C13,20 15,18 15,15.5C15,13 13,11 10.5,11M10.5,12.5A3,3 0 0,1 13.5,15.5C13.5,16.06 13.35,16.58 13.08,17L9,12.92C9.42,12.65 9.94,12.5 10.5,12.5M7.5,15.5C7.5,14.94 7.65,14.42 7.92,14L12,18.08C11.58,18.35 11.06,18.5 10.5,18.5A3,3 0 0,1 7.5,15.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file cancel';
-->
