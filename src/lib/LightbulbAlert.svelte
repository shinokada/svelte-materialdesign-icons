<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'lightbulb alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-lightbulb-alert"
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
    d="M10 2C6.1 2 3 5.1 3 9C3 11.4 4.2 13.5 6 14.7V17C6 17.6 6.4 18 7 18H13C13.6 18 14 17.6 14 17V14.7C15.8 13.4 17 11.3 17 9C17 5.1 13.9 2 10 2M7 21C7 21.6 7.4 22 8 22H12C12.6 22 13 21.6 13 21V20H7V21M19 12V7H21V13H19M19 17V15H21V17H19Z"
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
