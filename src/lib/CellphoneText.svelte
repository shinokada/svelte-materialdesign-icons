<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cellphone text';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cellphone-text"
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
    d="M17,19V5H7V19H17M17,1A2,2 0 0,1 19,3V21A2,2 0 0,1 17,23H7C5.89,23 5,22.1 5,21V3C5,1.89 5.89,1 7,1H17M9,7H15V9H9V7M9,11H13V13H9V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cellphone text';
-->
