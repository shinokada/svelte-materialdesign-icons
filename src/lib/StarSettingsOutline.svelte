<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'star settings outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-star-settings-outline"
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
    d="M11 22H13V24H11V22M7 24H9V22H7V24M15 24H17V22H15V24M16.54 13.97L18.18 21L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.63L12 2L14.81 8.63L22 9.24L16.54 13.97M15.76 17.66L14.77 13.38L18.09 10.5L13.71 10.13L12 6.09L10.29 10.13L5.91 10.5L9.23 13.38L8.24 17.66L12 15.39L15.76 17.66Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'star settings outline';
-->
