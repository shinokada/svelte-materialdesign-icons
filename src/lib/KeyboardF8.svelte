<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'keyboard f8';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-keyboard-f8"
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
    d="M5 7H11V9H7V11H10V13H7V17H5V7M15 13V15H17V13H15M15 9V11H17V9H15M15 17C13.9 17 13 16.11 13 15V13.5C13 12.67 13.67 12 14.5 12C13.67 12 13 11.33 13 10.5V9C13 7.9 13.9 7 15 7H17C18.1 7 19 7.89 19 9V10.5C19 11.33 18.33 12 17.5 12C18.33 12 19 12.67 19 13.5V15C19 16.11 18.11 17 17 17H15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'keyboard f8';
-->
