<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'battery heart';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-battery-heart"
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
    d="M12.67 4H11V2H5V4H3.33A1.34 1.34 0 0 0 2 5.33V20.67A1.34 1.34 0 0 0 3.33 22H12.67A1.34 1.34 0 0 0 14 20.67V5.33A1.34 1.34 0 0 0 12.67 4M19 16.17L18.42 15.64C16.36 13.77 15 12.54 15 11A2.18 2.18 0 0 1 17.2 8.8A2.4 2.4 0 0 1 19 9.63A2.4 2.4 0 0 1 20.8 8.8A2.18 2.18 0 0 1 23 11C23 12.5 21.64 13.74 19.58 15.61Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'battery heart';
-->
