<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'folder off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-folder-off"
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
    d="M22.11 21.46L20.84 22.73L18.11 20H4C2.9 20 2 19.11 2 18V6C2 5.42 2.25 4.9 2.64 4.53L1.11 3L2.39 1.73L22.11 21.46M22 18V8C22 6.89 21.1 6 20 6H12L10 4H7.2L21.88 18.68C21.96 18.47 22 18.24 22 18Z"
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
