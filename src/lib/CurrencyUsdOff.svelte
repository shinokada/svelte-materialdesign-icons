<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'currency usd off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-currency-usd-off"
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
    d="M3,4.27L4.28,3L21,19.72L19.73,21L16.06,17.33C15.44,18 14.54,18.55 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15H9C9,16.08 10.37,17 12,17C13.13,17 14.14,16.56 14.65,15.92L11.68,12.95C9.58,12.42 7,11.75 7,9C7,8.77 7,8.55 7.07,8.34L3,4.27M10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C11.63,7 11.28,7.05 10.95,7.13L9.4,5.58L10.5,5.18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'currency usd off';
-->
