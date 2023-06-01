<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'audio input rca';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-audio-input-rca"
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
    d="M11 6V12H5V6H7V2C7 1.45 7.45 1 8 1S9 1.45 9 2V6H11M5 14V16C5 17.3 5.84 18.4 7 18.82V23H9V18.82C10.16 18.4 11 17.3 11 16V14H5M17 6V2C17 1.45 16.55 1 16 1S15 1.45 15 2V6H13V12H19V6H17M13 14V16C13 17.3 13.84 18.4 15 18.82V23H17V18.82C18.16 18.4 19 17.3 19 16V14H13Z"
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
