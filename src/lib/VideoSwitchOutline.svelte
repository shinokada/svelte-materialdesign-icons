<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'video switch outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-video-switch-outline"
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
    d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13M18 9.5V6C18 5.4 17.5 5 17 5H3C2.5 5 2 5.4 2 6V18C2 18.5 2.5 19 3 19H17C17.5 19 18 18.5 18 18V14.5L22 18.5V5.5L18 9.5M16 17H4V7H16V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'video switch outline';
-->
