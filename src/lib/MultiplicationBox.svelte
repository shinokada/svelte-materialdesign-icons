<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'multiplication box';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-multiplication-box"
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
    d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19M11,17H13V13.73L15.83,15.36L16.83,13.63L14,12L16.83,10.36L15.83,8.63L13,10.27V7H11V10.27L8.17,8.63L7.17,10.36L10,12L7.17,13.63L8.17,15.36L11,13.73V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'multiplication box';
-->
