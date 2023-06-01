<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'text account';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-text-account"
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
    d="M21 5V7H3V5H21M3 17H12V15H3V17M3 12H21V10H3V12M18 14C19.11 14 20 14.9 20 16S19.11 18 18 18 16 17.11 16 16 16.9 14 18 14M14 22V21C14 19.9 15.79 19 18 19S22 19.9 22 21V22H14Z"
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
