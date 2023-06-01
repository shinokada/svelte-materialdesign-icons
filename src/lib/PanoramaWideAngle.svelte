<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'panorama wide angle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-panorama-wide-angle"
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
    d="M12 4C8 4 5.2 4.6 3 5C2.5 7 2 8.9 2 12C2 15 2.5 17 3 19C5.2 19.4 8 20 12 20C16 20 18.9 19.4 21 19C21.6 17 22 15 22 12C22 9 21.5 6.9 21 5C18.9 4.6 16 4 12 4Z"
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
