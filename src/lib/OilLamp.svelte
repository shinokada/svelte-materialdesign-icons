<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'oil lamp';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-oil-lamp"
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
    d="M5,20H16V22H5M11,5H10A2,2 0 0,0 8,7H13A2,2 0 0,0 11,5M16,8H22A2,2 0 0,1 20,10H19A4,4 0 0,0 15,14V15A4,4 0 0,1 11,19H10A4,4 0 0,1 6,15H4A2,2 0 0,1 2,13V10A2,2 0 0,1 4,8M6,10H4V13H6M19,5A2,2 0 0,1 21,7H22A2.9,2.9 0 0,0 19,4A2,2 0 0,1 17,2H16A2.9,2.9 0 0,0 19,5"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'oil lamp';
-->
