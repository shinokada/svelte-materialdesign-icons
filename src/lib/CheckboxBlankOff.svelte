<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'checkbox blank off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-checkbox-blank-off"
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
    d="M20.84 22.73L19.1 21C19.06 21 19.03 21 19 21H5C3.9 21 3 20.11 3 19V5C3 4.97 3 4.94 3 4.9L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M21 5C21 3.89 20.1 3 19 3H6.2L21 17.8V5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'checkbox blank off';
-->
