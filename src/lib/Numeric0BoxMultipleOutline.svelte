<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'numeric 0 box multiple outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-numeric-0-box-multiple-outline"
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
    d="M21,17V3H7V17H21M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M13,5H15A2,2 0 0,1 17,7V13A2,2 0 0,1 15,15H13A2,2 0 0,1 11,13V7A2,2 0 0,1 13,5M13,7V13H15V7H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'numeric 0 box multiple outline';
-->
