<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'volume vibrate';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-volume-vibrate"
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
    d="M4 9V15H8L13 20V4L8 9H4M16.55 2.47L15.5 3.53L17.93 6L15 9L17.93 12L15 15L17.93 18L15.5 20.47L16.55 21.53L20 18L17.07 15L20 12L17.07 9L20 6L16.55 2.47Z"
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
