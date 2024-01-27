<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'book settings outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-book-settings-outline"
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
    d="M18 0H6C4.89 0 4 .895 4 2V18C4 19.11 4.89 20 6 20H18C19.11 20 20 19.11 20 18V2C20 .895 19.11 0 18 0M18 18H6V2H8V10L10.5 7.75L13 10V2H18V18M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'book settings outline';
-->
