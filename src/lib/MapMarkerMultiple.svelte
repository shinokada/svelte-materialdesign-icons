<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'map marker multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-map-marker-multiple"
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
    d="M14,11.5A2.5,2.5 0 0,0 16.5,9A2.5,2.5 0 0,0 14,6.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 14,11.5M14,2C17.86,2 21,5.13 21,9C21,14.25 14,22 14,22C14,22 7,14.25 7,9A7,7 0 0,1 14,2M5,9C5,13.5 10.08,19.66 11,20.81L10,22C10,22 3,14.25 3,9C3,5.83 5.11,3.15 8,2.29C6.16,3.94 5,6.33 5,9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'map marker multiple';
-->
