<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'book off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-book-off-outline"
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
    d="M6 14.8L4 16.8V4C4 2.9 4.89 2 6 2H18C18.24 2 18.47 2.04 18.68 2.12L16.8 4H13V7.8L10.79 10L10.5 9.75L8 12V4H6V14.8M22.89 3L20 5.89V20C20 21.11 19.11 22 18 22H6C5.42 22 4.9 21.75 4.54 21.35L3.16 22.73L1.89 21.46L21.61 1.73L22.89 3M18 7.89L6 19.89V20H18V7.89Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'book off outline';
-->
