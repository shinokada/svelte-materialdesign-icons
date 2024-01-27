<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'book settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-book-settings"
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
    d="M20 2V18C20 19.11 19.11 20 18 20H6C4.89 20 4 19.11 4 18V2C4 .895 4.89 0 6 0H7V7L9.5 5.5L12 7V0H18C19.1 0 20 .89 20 2M7 24H9V22H7V24M15 24H17V22H15V24M11 24H13V22H11V24Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'book settings';
-->
