<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'smart card reader outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-smart-card-reader-outline"
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
    d="M14.5 8.5A2.5 2.5 0 1 0 17 11A2.5 2.5 0 0 0 14.5 8.5M8.25 6H7V16H8.25C9.91 16 10.75 12.66 10.75 11S9.91 6 8.25 6M19 2H5A2.07 2.07 0 0 0 3 4V18H5V4H19V18H21V4A2.07 2.07 0 0 0 19 2M23 22H1V21A2 2 0 0 1 3 19H21A2 2 0 0 1 23 21Z"
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
