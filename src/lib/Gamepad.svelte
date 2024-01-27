<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'gamepad';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-gamepad"
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
    d="M16.5,9L13.5,12L16.5,15H22V9M9,16.5V22H15V16.5L12,13.5M7.5,9H2V15H7.5L10.5,12M15,7.5V2H9V7.5L12,10.5L15,7.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'gamepad';
-->
