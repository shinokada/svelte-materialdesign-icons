<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'folder information';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-folder-information"
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
    d="M21 11.1V8C21 6.9 20.1 6 19 6H11L9 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H10.3C11.6 21.9 13.8 23 16 23C19.9 23 23 19.9 23 16C23 14.2 22.3 12.4 21 11.1M16 21C13.2 21 11 18.8 11 16S13.2 11 16 11 21 13.2 21 16 18.8 21 16 21M17 20H15V15H17V20M17 14H15V12H17V14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'folder information';
-->
