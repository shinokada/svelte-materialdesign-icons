<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'keyboard f6';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-keyboard-f6"
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
    d="M5 7H11V9H7V11H10V13H7V17H5V7M15 7H19V9H15V11H17C18.11 11 19 11.9 19 13V15C19 16.11 18.11 17 17 17H15C13.9 17 13 16.11 13 15V9C13 7.9 13.9 7 15 7M15 13V15H17V13H15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'keyboard f6';
-->
