<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'video wireless outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-video-wireless-outline"
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
    d="M15,12V20H5V12H15M16,10H4A1,1 0 0,0 3,11V21A1,1 0 0,0 4,22H16A1,1 0 0,0 17,21V17.5L21,21.5V10.5L17,14.5V11A1,1 0 0,0 16,10M3,3.86L4.4,5.24C7.5,2.19 12.5,2.19 15.6,5.24L17,3.86C13.14,0.05 6.87,0.05 3,3.86M5.8,6.63L7.2,8C8.75,6.5 11.25,6.5 12.8,8L14.2,6.63C11.88,4.34 8.12,4.34 5.8,6.63Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'video wireless outline';
-->
