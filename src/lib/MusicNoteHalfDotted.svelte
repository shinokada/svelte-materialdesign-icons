<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'music note half dotted';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-music-note-half-dotted"
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
    d="M14 3H12V13.56A3.96 3.96 0 0 0 10 13A4 4 0 1 0 14 17V3M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19M16.5 20A1.5 1.5 0 1 1 18 18.5A1.5 1.5 0 0 1 16.5 20Z"
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
