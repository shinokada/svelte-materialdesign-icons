<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'spade';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-spade"
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
    d="M15.71,1.22L12.88,4.05C12.1,4.83 12.1,6.09 12.88,6.87L14.3,8.29L10.06,12.53L7.58,10.06L1.22,16.42L7.58,22.78L13.94,16.42L11.47,13.94L15.71,9.7L17.13,11.12C17.91,11.9 19.17,11.9 19.95,11.12L22.78,8.29L15.71,1.22M15.71,4.05L19.95,8.29L18.54,9.7L14.3,5.46L15.71,4.05Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'spade';
-->
