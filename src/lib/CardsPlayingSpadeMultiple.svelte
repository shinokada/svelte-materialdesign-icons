<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cards playing spade multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cards-playing-spade-multiple"
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
    d="M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3M19 0H9C7.9 0 7 .9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 .9 20.1 0 19 0M15.8 13C15.4 13 15 12.9 14.6 12.7L15.5 15H12.5L13.4 12.7C13 12.9 12.6 13 12.2 13C11 13 10 12 10 10.8C10 9.3 11.4 8.1 13.4 6.2L14 5.7L14.6 6.2C16.6 8.1 18 9.3 18 10.8C18 12.1 17 13 15.8 13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cards playing spade multiple';
-->
