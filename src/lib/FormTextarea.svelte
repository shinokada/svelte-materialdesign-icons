<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'form textarea';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-form-textarea"
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
    d="M13 9H4V23H2V7H13M23 9V7H17V5A1 1 0 0 1 18 4H20V2H17.5C17 2 16 2.45 16 3C16 2.45 15.05 2 14.5 2H12V4H14A1 1 0 0 1 15 5V19A1 1 0 0 1 14 20H12V22H14.5C15.05 22 16 21.55 16 21C16 21.55 16.95 22 17.5 22H20V20H18A1 1 0 0 1 17 19V9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'form textarea';
-->
