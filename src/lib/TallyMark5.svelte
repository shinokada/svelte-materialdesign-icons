<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'tally mark 5';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-tally-mark-5"
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
    d="M19 10.73V19H17V11.36L15 12V19H13V12.62L11 13.26V19H9V13.89L7 14.5V19H5V15.15L2.57 15.92L2 14L5 13.05V5H7V12.42L9 11.79V5H11V11.16L13 10.53V5H15V9.9L17 9.26V5H19V8.63L21 8L21.57 9.92L19 10.73Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'tally mark 5';
-->
