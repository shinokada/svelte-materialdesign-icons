<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file xml box';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-xml-box"
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
    d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M8 15H6.5L6 13L5.5 15H4L4.75 12L4 9H5.5L6 11L6.5 9H8L7.25 12L8 15M15.5 15H14V10.5H13V14H11.5V10.5H10.5V15H9V11C9 9.9 9.9 9 11 9H13.5C14.61 9 15.5 9.9 15.5 11V15M20 15H17V9H18.5V13.5H20V15Z"
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
