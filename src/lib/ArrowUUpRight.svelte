<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow u up right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-arrow-u-up-right"
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
    d="M21.5 9.5L20.09 10.92L17 7.83V13.5C17 17.09 14.09 20 10.5 20S4 17.09 4 13.5V6H6V13.5C6 16 8 18 10.5 18S15 16 15 13.5V7.83L11.91 10.91L10.5 9.5L16 4L21.5 9.5Z"
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
