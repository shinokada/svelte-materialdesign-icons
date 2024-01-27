<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'sticker text outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-sticker-text-outline"
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
    d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M20.1 15H18.6C16.7 15 15.1 16.6 15.1 18.5V20H5.8C4.8 20 4 19.2 4 18.2V5.8C4 4.8 4.8 4 5.8 4H18.3C19.3 4 20.1 4.8 20.1 5.8V15M7 7H17V9H7V7M7 11H17V13H7V11M7 15H13V17H7V15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'sticker text outline';
-->
