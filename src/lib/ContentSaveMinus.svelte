<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'content save minus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-content-save-minus"
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
    d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H12.81C12.45 20.38 12.2 19.7 12.08 19L12 19C10.34 19 9 17.66 9 16S10.34 13 12 13C12.68 13 13.34 13.23 13.87 13.65C15 12.59 16.46 12 18 12C19.05 12 20.09 12.28 21 12.81V7L17 3M15 9H5V5H15V9M14 17V19H22V17H14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'content save minus';
-->
