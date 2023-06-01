<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'car windshield';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-car-windshield"
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
    d="M22.63 15.5L20.21 5.85A1 1 0 0 0 19.14 5.1C17.8 5.24 14.14 5.5 12 5.5S6.2 5.24 4.86 5.1A1 1 0 0 0 3.79 5.85L1.37 15.5A1.5 1.5 0 0 0 2.55 17.36A61.5 61.5 0 0 0 12 18A61.5 61.5 0 0 0 21.45 17.36A1.5 1.5 0 0 0 22.63 15.5Z"
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
