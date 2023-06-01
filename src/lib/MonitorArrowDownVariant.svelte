<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'monitor arrow down variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-monitor-arrow-down-variant"
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
    d="M17 14L22 9L20.6 7.6L18 10.2V3H16V10.2L13.4 7.6L12 9L17 14M23 14V16C23 17.1 22.1 18 21 18H14V20H16V22H8V20H10V18H3C1.9 18 1 17.1 1 16V4C1 2.9 1.9 2 3 2H12V4H3V16H21V14H23Z"
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
