<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'reply circle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-reply-circle"
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
    d="M2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2 2 6.5 2 12M5 11L10 6V9C15.06 9.73 17.28 13.33 18 17C16.19 14.43 13.61 13 10 13V16L5 11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'reply circle';
-->
