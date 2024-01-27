<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'numeric 6 box multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-numeric-6-box-multiple"
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
    d="M13,11H15V13H13V11M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M13,15H15A2,2 0 0,0 17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H13A2,2 0 0,0 11,7V13C11,14.11 11.9,15 13,15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'numeric 6 box multiple';
-->
