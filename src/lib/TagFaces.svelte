<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'tag faces';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-tag-faces"
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
    d="M15,18C11.68,18 9,15.31 9,12C9,8.68 11.68,6 15,6A6,6 0 0,1 21,12A6,6 0 0,1 15,18M4,13A1,1 0 0,1 3,12A1,1 0 0,1 4,11A1,1 0 0,1 5,12A1,1 0 0,1 4,13M22,3H7.63C6.97,3 6.38,3.32 6,3.81L0,12L6,20.18C6.38,20.68 6.97,21 7.63,21H22A2,2 0 0,0 24,19V5C24,3.89 23.1,3 22,3M13,11A1,1 0 0,0 14,10A1,1 0 0,0 13,9A1,1 0 0,0 12,10A1,1 0 0,0 13,11M15,16C16.86,16 18.35,14.72 18.8,13H11.2C11.65,14.72 13.14,16 15,16M17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'tag faces';
-->
