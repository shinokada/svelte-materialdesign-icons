<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cone';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-cone"
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
    d="M21.62 16.68H21.62L12.85 2.5C12.66 2.16 12.33 2 12 2C11.67 2 11.34 2.16 11.15 2.47L2.38 16.65H2.4C2.15 17.04 2 17.5 2 18C2 19.5 3.3 22 12 22C15.74 22 22 21.5 22 18C22 17.61 21.91 17.15 21.62 16.68M12 4.9L18 14.58C16.53 14.23 14.6 14 12 14C10.25 14 7.96 14.12 6 14.6L12 4.9M12 20C7.58 20 4 19.11 4 18C4 16.9 7.58 16 12 16S20 16.9 20 18C20 19.11 16.42 20 12 20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cone';
-->
