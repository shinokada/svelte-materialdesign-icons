<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'gate nor';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-gate-nor"
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
    d="M2,4C5,10 5,14 2,20H5C9.4,20 13,17.7 16.6,13.7C17.15,14.5 18.04,15 19,15A3,3 0 0,0 22,12A3,3 0 0,0 19,9C18.04,9 17.15,9.5 16.6,10.3C13,6.3 9.4,4 5,4H2M5,6C8.8,6 12,8.1 15.3,12C12,15.9 8.8,18 5,18C6.5,14 6.5,10 5,6M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13A1,1 0 0,1 18,12C18,11.5 18.5,11 19,11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'gate nor';
-->
