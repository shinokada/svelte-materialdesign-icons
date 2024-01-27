<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'battery off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-battery-off"
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
    d="M18 14.8L7.21 4H9V2H15V4H16.67A1.34 1.34 0 0 1 18 5.33M18 17.35L3.38 2.73L2.11 4L6 7.89V20.67A1.34 1.34 0 0 0 7.33 22H16.67A1.34 1.34 0 0 0 18 20.67V19.89L20.84 22.73L22.11 21.46Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'battery off';
-->
