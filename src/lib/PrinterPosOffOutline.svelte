<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'printer pos off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-printer-pos-off-outline"
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
    d="M2.39 1.73L1.11 3L7 8.89V10H6C4.89 10 4 10.9 4 12V19H17.11L20.84 22.73L22.11 21.46L2.39 1.73M6 17V12H10.11L15.11 17H6M9.2 6L7.2 4H17V10H18C19.11 10 20 10.9 20 12V16.8L18 14.8V12H15.2L13.2 10H15V6H9.2M7 13H11V15H7V13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'printer pos off outline';
-->
