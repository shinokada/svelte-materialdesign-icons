<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'gate not';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-gate-not"
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
    d="M2,4V20L16.2,13C16.62,14.19 17.74,15 19,15A3,3 0 0,0 22,12A3,3 0 0,0 19,9C17.74,9 16.62,9.81 16.2,11L2,4M4,7.3L13.7,12L4,16.7V7.3M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13A1,1 0 0,1 18,12C18,11.5 18.5,11 19,11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'gate not';
-->
