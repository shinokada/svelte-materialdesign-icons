<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'message flash';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-message-flash"
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
    d="M22 4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H15V10H22V4M22.5 16H20.3L22 12H17V18H19V23L22.5 16Z"
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
