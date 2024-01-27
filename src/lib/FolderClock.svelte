<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'folder clock';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-folder-clock"
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
    d="M3,4C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H10.26C11.57,21.88 13.71,23 16,23A7,7 0 0,0 23,16C23,14.17 22.28,12.42 21,11.11V8C21,6.89 20.1,6 19,6H11L9,4H3M16,11A5,5 0 0,1 21,16A5,5 0 0,1 16,21A5,5 0 0,1 11,16A5,5 0 0,1 16,11M15,12V17L18.61,19.16L19.36,17.94L16.5,16.25V12H15Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'folder clock';
-->
