<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'email search';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-email-search"
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
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
    d="M3,4H19A2,2 0 0,1 21,6V10.82C20,9.85 18.7,9.23 17.31,9.06L19,8V6L11,11L3,6V8L10.62,12.76C10.21,13.62 10,14.55 10,15.5C10,17.18 10.65,18.79 11.81,20H3A2,2 0 0,1 1,18V6C1,4.89 1.89,4 3,4M16.5,11C19,11 21,13 21,15.5C21,16.38 20.75,17.21 20.31,17.9L23.39,21L22,22.39L18.88,19.32C18.19,19.75 17.37,20 16.5,20C14,20 12,18 12,15.5C12,13 14,11 16.5,11M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-materialdesign-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
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
