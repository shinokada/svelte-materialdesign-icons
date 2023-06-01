<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'umbrella closed';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-umbrella-closed"
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
    d="M12 2C11.6 2 11.3 2.2 11.1 2.6L6.5 15H11V19C11 19.6 10.6 20 10 20C9.4 20 9 19.6 9 19V18H7V19C7 20.7 8.3 22 10 22S13 20.7 13 19V15H17.5L12.9 2.6C12.7 2.2 12.4 2 12 2Z"
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
