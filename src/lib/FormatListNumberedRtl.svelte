<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'format list numbered rtl';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-format-list-numbered-rtl"
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
    d="M3,13V11H17V13H3M3,19V17H17V19H3M3,7V5H17V7H3M20,8V5H19V4H21V8H20M19,17V16H22V20H19V19H21V18.5H20V17.5H21V17H19M21.25,10C21.67,10 22,10.34 22,10.75C22,10.95 21.92,11.14 21.79,11.27L20.12,13H22V14H19V13.08L21,11H19V10H21.25Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'format list numbered rtl';
-->
