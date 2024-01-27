<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'order alphabetical descending';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-order-alphabetical-descending"
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
    d="M7 13H5C3.9 13 3 13.9 3 15V21H5V19H7V21H9V15C9 13.9 8.11 13 7 13M7 17H5V15H7M9 3V5L5.67 9H9V11H3V9L6.33 5H3V3M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'order alphabetical descending';
-->
