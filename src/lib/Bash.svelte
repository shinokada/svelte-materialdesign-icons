<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'bash';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-bash"
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
    d="M5 9H7.31L7.63 6H9.63L9.31 9H11.31L11.63 6H13.63L13.31 9H15V11H13.1L12.9 13H15V15H12.69L12.37 18H10.37L10.69 15H8.69L8.37 18H6.37L6.69 15H5V13H6.9L7.1 11H5V9M9.1 11L8.9 13H10.9L11.1 11M19 6H17V14H19M19 16H17V18H19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'bash';
-->
