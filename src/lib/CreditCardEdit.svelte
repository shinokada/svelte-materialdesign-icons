<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'credit card edit';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-credit-card-edit"
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
    d="M20.6 11.3C20.7 11.2 20.8 11.1 21 11.1C21.1 11.1 21.3 11.2 21.4 11.3L22.6 12.5C22.8 12.7 22.8 13.1 22.6 13.3L21.6 14.3L19.6 12.3L20.6 11.3M13 18.9L19 12.8L21.1 14.9L15.1 21H13V18.9M11 19.1V18.1L11.6 17.5L18.1 11H4V8H20V9.1L22 7.1V6C22 4.9 21.1 4 20 4H4C3.5 4 3 4.2 2.6 4.6C2.2 5 2 5.5 2 6V18C2 18.5 2.2 19 2.6 19.4C3 19.8 3.5 20 4 20H11V19.1Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'credit card edit';
-->
