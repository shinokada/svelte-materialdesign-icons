<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'google nearby';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-google-nearby"
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
    d="M21.36,10.46L13.54,2.64C12.69,1.79 11.31,1.79 10.46,2.64L2.64,10.46C1.79,11.31 1.79,12.69 2.64,13.54L10.46,21.36C11.31,22.21 12.69,22.21 13.54,21.36L21.36,13.54C22.21,12.69 22.21,11.31 21.36,10.46M12,19L5,12L12,5L19,12L12,19M16.5,12L12,16.5L7.5,12L12,7.5L16.5,12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'google nearby';
-->
