<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'battery minus outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-battery-minus-outline"
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
    d="M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2H15V4H16.67C17.4 4 18 4.6 18 5.33V12C17.3 12 16.63 12.13 16 12.35V6H8V20H12.35C12.61 20.75 13 21.42 13.54 22M22 17V19H14V17H22Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'battery minus outline';
-->
