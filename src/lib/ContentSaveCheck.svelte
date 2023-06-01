<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'content save check';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-content-save-check"
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
    d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21"
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
