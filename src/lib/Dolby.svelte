<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'dolby';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-dolby"
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
    d="M2,5V19H22V5H2M6,17H4V7H6C8.86,7.09 11.1,9.33 11,12C11.1,14.67 8.86,16.91 6,17M20,17H18C15.14,16.91 12.9,14.67 13,12C12.9,9.33 15.14,7.09 18,7H20V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'dolby';
-->
