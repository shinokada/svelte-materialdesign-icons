<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cards club';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cards-club"
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
    d="M12,2C14.3,2 16.3,4 16.3,6.2C16.21,8.77 14.34,9.83 14.04,10C15.04,9.5 16.5,9.5 16.5,9.5C19,9.5 21,11.3 21,13.8C21,16.3 19,18 16.5,18C16.5,18 15,18 13,17C13,17 12.7,19 15,22H9C11.3,19 11,17 11,17C9,18 7.5,18 7.5,18C5,18 3,16.3 3,13.8C3,11.3 5,9.5 7.5,9.5C7.5,9.5 8.96,9.5 9.96,10C9.66,9.83 7.79,8.77 7.7,6.2C7.7,4 9.7,2 12,2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cards club';
-->
