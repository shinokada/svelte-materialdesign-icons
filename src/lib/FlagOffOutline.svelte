<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'flag off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-flag-off-outline"
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
    d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V21H7V14H12.11L12.72 14.61L13 16H14.11L20.84 22.73L22.11 21.46M7 12V8.89L10.11 12H7M9.2 6L7.2 4H14L14.4 6H20V16H19.2L17.2 14H18V8H12.76L12.36 6H9.2Z"
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
