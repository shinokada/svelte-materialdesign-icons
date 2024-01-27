<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'home lock open';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-home-lock-open"
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
    d="M12,3L2,12H5V20H19V12H22L12,3M12,8A3,3 0 0,1 15,11H13A1,1 0 0,0 12,10A1,1 0 0,0 11,11V13H16V17H8V13H9V11A3,3 0 0,1 12,8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'home lock open';
-->
