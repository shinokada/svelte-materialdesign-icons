<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'airplane settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-airplane-settings"
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
    d="M20.09 4.56L16.2 8.45L18.32 17.64L16.91 19.06L13 11.63L9.13 15.5L9.5 18L8.42 19.06L6.65 15.87L3.47 14.11L4.53 13.04L7 13.4L10.9 9.5L3.47 5.62L4.89 4.21L14.08 6.33L17.97 2.44C18.55 1.85 19.5 1.85 20.09 2.44C20.68 3 20.68 3.97 20.09 4.56M7 24H9V22H7V24M11 24H13V22H11V24M15 24H17V22H15V24Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'airplane settings';
-->
