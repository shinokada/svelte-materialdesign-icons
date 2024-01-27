<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'inbox full';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-inbox-full"
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
    d="M19 15V5H5V15H9C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15H19M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19L3 5C3 3.9 3.89 3 5 3H19M7 13V11H17V13H7M7 9V7H17V9H7Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'inbox full';
-->
