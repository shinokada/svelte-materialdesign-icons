<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'post lamp';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-post-lamp"
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
    d="M14 3L13 1H11L10 3L5 6H7L8 14L10 16L10.5 17H9V23H15V17H13.5L14 16L16 14L17 6H19L14 3M14.16 13H9.84L9 6H15L14.16 13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'post lamp';
-->
