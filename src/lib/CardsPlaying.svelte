<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cards playing';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cards-playing"
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
    d="M14.7 2.2H16.2C17.3 2.2 18.2 3.1 18.2 4.2V10.6L14.7 2.2M20.1 3.8L21.4 4.4C22.4 4.8 22.9 6 22.5 7L20.1 12.9V3.8M18 15.5L13 3.5C12.7 2.7 12 2.3 11.2 2.3C10.9 2.3 10.7 2.4 10.4 2.5L3 5.5C2 5.9 1.5 7 2 8L7 20C7.3 20.8 8 21.2 8.8 21.2C9.1 21.2 9.3 21.2 9.6 21L17 18C17.8 17.7 18.2 17 18.2 16.2C18.1 16 18.1 15.7 18 15.5M11.4 15L8.2 12.6L8.6 8.6L11.8 11L11.4 15"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cards playing';
-->
