<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'filter settings';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-filter-settings"
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
    d="M15 22H17V24H15M11 22H13V24H11M7 22H9V24H7M14 12V19.88C14.04 20.18 13.94 20.5 13.71 20.71C13.32 21.1 12.69 21.1 12.3 20.71L10.29 18.7C10.06 18.47 9.96 18.16 10 17.87V12H9.97L4.21 4.62C3.87 4.19 3.95 3.56 4.38 3.22C4.57 3.08 4.78 3 5 3H19C19.22 3 19.43 3.08 19.62 3.22C20.05 3.56 20.13 4.19 19.79 4.62L14.03 12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'filter settings';
-->
