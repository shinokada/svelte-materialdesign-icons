<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'handball';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-handball"
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
    d="M15.83 10.43A6.93 6.93 0 0 1 18.39 14.86A6.64 6.64 0 0 1 17.5 19.5L15.78 18.5A5 5 0 0 0 16.44 16A5.22 5.22 0 0 0 15.46 13.06L9.18 23.93L7.44 22.95L10.44 17.75L8.71 16.76L7.21 19.34L5.5 18.36L10.63 9.45A7 7 0 0 1 8.8 5.46A6.91 6.91 0 0 1 9.69 1.1L11.43 2.13A4.84 4.84 0 0 0 10.91 5.9A4.74 4.74 0 0 0 13.21 8.93M16 5A2 2 0 1 0 18 7A2 2 0 0 0 16 5M13.5 1A1.5 1.5 0 1 0 15 2.5A1.5 1.5 0 0 0 13.5 1Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'handball';
-->
