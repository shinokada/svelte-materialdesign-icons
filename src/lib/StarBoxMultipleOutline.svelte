<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'star box multiple outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-star-box-multiple-outline"
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
    d="M4 6V20H18V22H3C2.4 22 2 21.6 2 21V6H4M12.1 10.6L10.2 8.8L12.8 8.4L14 6L15.2 8.4L17.8 8.8L15.9 10.7L16.3 13.3L14 12L11.6 13.2L12.1 10.6M8 2H20C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H8C6.9 18 6 17.11 6 16V4C6 2.9 6.9 2 8 2M8 4V16H20V4H8Z"
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
