<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'human non binary';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-human-non-binary"
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
    d="M12 2C13.11 2 14 2.9 14 4S13.11 6 12 6 10 5.11 10 4 10.9 2 12 2M13.91 8.41C13.66 7.59 12.9 7 12 7H10.5C9.4 7 8.5 7.9 8.5 9V14.5H10V22H13.5V16H16.5L13.91 8.41Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'human non binary';
-->
