<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'nature people';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-nature-people"
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
    d="M4.5,11A1.5,1.5 0 0,0 6,9.5A1.5,1.5 0 0,0 4.5,8A1.5,1.5 0 0,0 3,9.5A1.5,1.5 0 0,0 4.5,11M22.17,9.17C22.17,5.3 19.04,2.17 15.17,2.17A7,7 0 0,0 8.17,9.17C8.17,12.64 10.69,15.5 14,16.06V20H6V17H7V13A1,1 0 0,0 6,12H3A1,1 0 0,0 2,13V17H3V22H19V20H16V16.12C19.47,15.71 22.17,12.76 22.17,9.17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'nature people';
-->
