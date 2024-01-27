<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'publish off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-publish-off"
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
    d="M20.8 22.7L15 16.9V20H9V14H5L8.6 10.4L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M19 6V4H7.2L9.2 6H19M17.2 14H19L12 7L11.1 7.9L17.2 14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'publish off';
-->
