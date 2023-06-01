<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'email off outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-email-off-outline"
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
    d="M22.1 21.5L2.4 1.7L1.1 3L2.6 4.5C2.3 4.9 2 5.4 2 6V18C2 19.1 2.9 20 4 20H18.1L20.8 22.7L22.1 21.5M4 18V8L9.6 11.5L16.1 18H4M9.2 6L7.2 4H20C21.1 4 22 4.9 22 6V18C22 18.2 22 18.5 21.9 18.7L20 16.8V8L14.6 11.4L13.4 10.2L20 6H9.2Z"
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
