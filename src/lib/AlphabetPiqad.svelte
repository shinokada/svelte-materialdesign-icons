<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'alphabet piqad';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-alphabet-piqad"
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
    d="M13.04 4L6.54 17.85C6.21 18.55 5.5 19 4.73 19H4V20H16C17.2 20 18.27 20.54 19 21.39H20C19.05 19.32 17 18 14.7 18H12C11.29 18 10.62 17.63 10.24 17.03C9.85 16.43 9.8 15.68 10.1 15.03L10.58 14H19V13H17.5C15.29 13 13.5 11.21 13.5 9C13.5 6.79 15.29 5 17.5 5H20V4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'alphabet piqad';
-->
