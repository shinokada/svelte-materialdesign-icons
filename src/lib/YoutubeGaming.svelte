<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'youtube gaming';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-youtube-gaming"
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
    d="M22 13V8L17 5L12 8L7 5L2 8V13L12 19L22 13M9 11H7V13H6V11H4V10H6V8H7V10H9V11M15 13C14.45 13 14 12.55 14 12S14.45 11 15 11 16 11.45 16 12 15.55 13 15 13M18 11C17.45 11 17 10.55 17 10S17.45 9 18 9 19 9.45 19 10 18.55 11 18 11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'youtube gaming';
-->
