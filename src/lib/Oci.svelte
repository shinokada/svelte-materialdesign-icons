<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'oci';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-oci"
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
    d="M2 2V22H22V2M19.12 19.03H4.87V5H19.13V19.03M14.83 10.71H17.69V17.59H14.83M14.83 6.41H17.69V9.27H14.83M6.3 6.41V17.59H13.4V14.72H9.17V9.28H13.4V6.41Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'oci';
-->
