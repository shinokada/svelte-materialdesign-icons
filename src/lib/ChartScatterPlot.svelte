<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'chart scatter plot';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-chart-scatter-plot"
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
    d="M2,2H4V20H22V22H2V2M9,10A3,3 0 0,1 12,13A3,3 0 0,1 9,16A3,3 0 0,1 6,13A3,3 0 0,1 9,10M13,2A3,3 0 0,1 16,5A3,3 0 0,1 13,8A3,3 0 0,1 10,5A3,3 0 0,1 13,2M18,12A3,3 0 0,1 21,15A3,3 0 0,1 18,18A3,3 0 0,1 15,15A3,3 0 0,1 18,12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'chart scatter plot';
-->
