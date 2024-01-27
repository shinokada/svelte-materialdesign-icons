<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'soy sauce';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-soy-sauce"
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
    d="M13.9,7.5C13.9,6.8 14.1,6.3 14.2,6H14.8L15.7,3.5H16.5V2H7.5V3.5H8.3L9.2,6H9.8C10,6.3 10.1,6.8 10.1,7.5C10.1,8.8 6,13.7 6,17.6V19.6C6,21 8.7,21.9 12,21.9C15.3,21.9 18,21 18,19.6V17.6C18,13.7 13.9,8.8 13.9,7.5M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'soy sauce';
-->
