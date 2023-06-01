<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'clock alert';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-clock-alert"
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
    d="M20 12H22V18H20V12M20 20H22V22H20V20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22C14.3 22 16.3 21.2 18 20V10H21.8C20.9 5.4 16.8 2 12 2M16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
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
