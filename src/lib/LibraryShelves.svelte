<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'library shelves';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-library-shelves"
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
    d="M19.5,9V1.5H16.5V9H13.5V1.5H10.5V9H7.5V1.5H4.65V9H3V10.5H21V9H19.5M19.5,13.5H16.5V21H13.5V13.5H10.5V21H7.5V13.5H4.65V21H3V22.5H21V21H19.5V13.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'library shelves';
-->
