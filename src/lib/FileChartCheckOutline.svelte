<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file chart check outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-chart-check-outline"
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
    d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H13.8C13.4 21.4 13.2 20.7 13.1 20H6V4H13V9H18V13.1C18.3 13 18.7 13 19 13C19.3 13 19.7 13 20 13.1V8L14 2H6M11 11V19H13V11H11M7 13V19H9V13H7Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-materialdesign-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop color = 'currentColor';
@prop arialabel ='icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
