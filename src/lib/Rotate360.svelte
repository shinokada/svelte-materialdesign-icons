<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rotate 360';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-rotate-360"
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
    d="M12 7C6.5 7 2 9.2 2 12C2 14.2 4.9 16.1 9 16.8V20L13 16L9 12V14.7C5.8 14.1 4 12.8 4 12C4 10.9 7 9 12 9S20 10.9 20 12C20 12.7 18.5 13.9 16 14.5V16.6C19.5 15.8 22 14.1 22 12C22 9.2 17.5 7 12 7Z"
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
