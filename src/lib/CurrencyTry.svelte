<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'currency try';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-currency-try"
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
    d="M9 8.76V3H11V7.5L15 5V7.36L11 9.87L11 12.22L15 9.72V12.08L11 14.59V19C13.76 19 16 16.76 16 14H18C18 17.87 14.87 21 11 21H9V15.84L6 17.72V15.36L9 13.5V11.12L6 13V10.64L9 8.76Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'currency try';
-->
