<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'mirror variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-mirror-variant"
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
    d="M8.29 10.28L11.53 7.03L12.59 8.09L9.35 11.34L8.29 10.28M8.7 14.61L14.36 8.95L15.42 10L9.76 15.67L8.7 14.61M14.17 3L18 6.83V17.17L14.17 21H9.83L6 17.17V6.83L9.83 3H14.17M15 1H9L4 6V18L9 23H15L20 18V6L15 1Z"
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
