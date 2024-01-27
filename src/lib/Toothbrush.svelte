<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'toothbrush';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-toothbrush"
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
    d="M12.91 6.43L15.03 8.55L16.09 7.5L15.03 6.43L17.86 3.6L18.92 4.66L20 3.6L17.86 1.5M3 20.57L4.43 22L14.5 11.9L16.63 11.19L21.4 6.43C22.18 5.65 22.18 4.38 21.4 3.6L15.55 9.44L13.43 10.15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'toothbrush';
-->
