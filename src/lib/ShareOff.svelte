<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'share off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-share-off"
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
    d="M20.8 22.7L15.6 17.5L14 19V15.9L13.1 14.9C8.6 15.2 5.4 16.8 3 20.1C3.58 16.31 5.72 12.94 8.9 10.8L1.1 3L2.4 1.7L22.1 21.5M18.1 14.9L21 12L14 5V9L12.5 9.3"
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
