<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'floor lamp dual';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-floor-lamp-dual"
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
    d="M11.73 10.06L10.17 11.24L11 12.2V20H8V22H16V20H13V12.3L13.85 11.26L12.27 10.07L11.73 10.06M9.08 10.82L3 6.81L9.39 2L11.55 8.93L9.08 10.82M14.61 2L21 6.81L14.92 10.82L12.44 8.95L14.61 2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'floor lamp dual';
-->
