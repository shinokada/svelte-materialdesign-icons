<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'silo';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-silo"
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
    d="M15 7.8C14.6 4.5 11.8 2 8.5 2C6.8 2 5.1 2.7 3.9 3.9S2 6.8 2 8.5V22H15V9.8L18 11.6V22H20V12.8L22 14V12L15 7.8M11 20H6V18H11V20M11 16H6V14H11V16M11 12H6V10H11V12M4.3 7C4.9 5.2 6.6 4 8.5 4S12.1 5.2 12.7 7H4.3Z"
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
