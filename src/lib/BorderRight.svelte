<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'border right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-border-right"
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
    d="M11,9H13V7H11M11,5H13V3H11M11,13H13V11H11M15,5H17V3H15M15,21H17V19H15M19,21H21V3H19M15,13H17V11H15M11,17H13V15H11M3,9H5V7H3M3,17H5V15H3M3,13H5V11H3M11,21H13V19H11M3,21H5V19H3M7,13H9V11H7M7,5H9V3H7M3,5H5V3H3M7,21H9V19H7V21Z"
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
