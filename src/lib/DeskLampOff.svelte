<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'desk lamp off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-desk-lamp-off"
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
    d="M9 10.87L8.8 11.13C8.93 11.4 9 11.7 9 12C9 12.47 8.83 12.92 8.53 13.28L13 20H17V22H7V20H10.62L6.58 13.95C5.66 13.75 5 12.94 5 12C5 10.9 5.9 10 7 10H7.14L7.53 9.42L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L9 10.87M18.33 7L16.67 9.5C17.35 9.95 18.29 9.77 18.75 9.08S19 7.46 18.33 7M9.57 6.37L11 7.82L12 6.37C11.78 8.05 12.75 9.89 14.45 11L18.89 4.37C17.2 3.24 15.12 3.04 13.65 3.87L10.85 2L9.18 4.5L10.32 5.25L9.57 6.37Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'desk lamp off';
-->
