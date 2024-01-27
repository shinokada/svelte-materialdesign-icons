<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'treasure chest outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-treasure-chest-outline"
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
    d="M2 20H22V7C22 6.2 21.68 5.44 21.12 4.88C20.56 4.32 19.8 4 19 4H5C4.2 4 3.44 4.32 2.88 4.88C2.32 5.44 2 6.2 2 7V20M20 11H15V9H9V11H4V7C4 6.74 4.11 6.5 4.29 6.29C4.5 6.11 4.74 6 5 6H19C19.27 6 19.5 6.11 19.71 6.29C19.9 6.5 20 6.74 20 7V11M15 13H20V18H4V13H9L11 15H13L15 13M11 11H13V13H11V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'treasure chest outline';
-->
