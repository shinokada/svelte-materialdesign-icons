<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'table picnic';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-table-picnic"
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
    d="M4 6H20V9H18L18.22 11H23V13H18.44L19 18H16.5L15.94 13H8.06L7.5 18H5L5.56 13H1V11H5.78L6 9H4M15.5 9H8.5L8.29 11H15.71Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'table picnic';
-->
