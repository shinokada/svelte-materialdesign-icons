<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'panorama vertical';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-panorama-vertical"
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
    d="M18.5 12C18.5 8.1 19.3 5.1 19.9 3.3C20.1 2.7 19.7 2 19 2H5C4.3 2 3.8 2.7 4.1 3.3C4.7 5.4 5.5 8.1 5.5 12C5.5 15.9 4.7 18.7 4.1 20.7C3.8 21.3 4.3 22 5 22H19C19.7 22 20.2 21.3 20 20.7C19.3 18.7 18.5 15.9 18.5 12Z"
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
