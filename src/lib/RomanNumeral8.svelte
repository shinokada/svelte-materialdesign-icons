<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'roman numeral 8';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-roman-numeral-8"
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
    d="M1 7L3 17H5L7 7H5L4 12L3 7H1M12 7V9H11V15H12V17H8V15H9V9H8V7H12M17 7V9H16V15H17V17H13V15H14V9H13V7H17M22 7V9H21V15H22V17H18V15H19V9H18V7H22Z"
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
