<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'lightbulb spot off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-lightbulb-spot-off"
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
    d="M20.84 22.73L15.11 17H9L9 14C6.5 12.57 4 11 4 6V5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M22 4V2H5.2L7.2 4H22M20 6H9.2L16.37 13.17C18.33 11.87 20 10.07 20 6M13 22H15V19H13V22M9 22H11V19H9L9 22Z"
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
