<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'calendar badge';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-calendar-badge"
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
    d="M19.5 16C17.6 16 16 17.6 16 19.5S17.6 23 19.5 23 23 21.4 23 19.5 21.4 16 19.5 16M14.21 21H5C3.9 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H6V1H8V3H16V1H18V3H19C20.1 3 21 3.89 21 5V14.21C20.5 14.08 20 14 19.5 14C19.33 14 19.17 14 19 14.03V8H5V19H14.03C14 19.17 14 19.33 14 19.5C14 20 14.08 20.5 14.21 21Z"
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
