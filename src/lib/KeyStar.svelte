<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'key star';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-key-star"
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
    d="M7.5 3C5 3 3 5 3 7.5S5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7C11.1 4.2 9.5 3 7.5 3M7.5 6C8.3 6 9 6.7 9 7.5S8.3 9 7.5 9 6 8.3 6 7.5 6.7 6 7.5 6M12 14L10.9 16.6L8 16.9L10.2 18.8L9.5 21.6L12 20.1L14.4 21.6L13.8 18.8L16 16.9L13.1 16.7L12 14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'key star';
-->
