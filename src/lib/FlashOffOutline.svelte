<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'flash off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-flash-off-outline"
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
    d="M9 6.19L7 4.19V2H17L13.5 9H17L15.18 12.37L11.43 8.62L13.76 4H9V6.19M19 18.73L17.73 20L13.41 15.68L10 22V14H7V9.27L2 4.27L3.27 3L19 18.73Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'flash off outline';
-->
