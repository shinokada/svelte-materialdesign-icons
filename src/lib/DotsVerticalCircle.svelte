<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'dots vertical circle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-dots-vertical-circle"
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
    d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5A1.5,1.5 0 0,0 10.5,12M10.5,17.5A1.5,1.5 0 0,0 12,19A1.5,1.5 0 0,0 13.5,17.5A1.5,1.5 0 0,0 12,16A1.5,1.5 0 0,0 10.5,17.5M10.5,6.5A1.5,1.5 0 0,0 12,8A1.5,1.5 0 0,0 13.5,6.5A1.5,1.5 0 0,0 12,5A1.5,1.5 0 0,0 10.5,6.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'dots vertical circle';
-->
