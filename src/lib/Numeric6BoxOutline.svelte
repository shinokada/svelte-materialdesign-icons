<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'numeric 6 box outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-numeric-6-box-outline"
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
    d="M11,13H13V15H11M11,17H13A2,2 0 0,0 15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H11A2,2 0 0,0 9,9V15C9,16.11 9.9,17 11,17M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'numeric 6 box outline';
-->
