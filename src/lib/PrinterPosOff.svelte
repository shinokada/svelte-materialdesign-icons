<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'printer pos off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-printer-pos-off"
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
    d="M12.2 9L7.2 4H17V9H12.2M20 16.8V12C20 10.9 19.11 10 18 10H13.2L20 16.8M22.11 21.46L20.84 22.73L17.11 19H4V12C4 10.9 4.89 10 6 10H8.11L1.11 3L2.39 1.73L22.11 21.46M10 12H6V14H10V12Z"
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
