<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'train car passenger';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-train-car-passenger"
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
    d="M21 7H3C1.9 7 1 7.9 1 9V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V9C23 7.9 22.11 7 21 7M7 12H3V9H7V12M15 12H9V9H15V12M21 12H17V9H21V12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'train car passenger';
-->
