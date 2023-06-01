<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'move resize variant';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-move-resize-variant"
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
    d="M1.88,0.46L0.46,1.88L5.59,7H2V9H9V2H7V5.59M11,7V9H21V15H23V9A2,2 0 0,0 21,7M7,11V21A2,2 0 0,0 9,23H15V21H9V11M15.88,14.46L14.46,15.88L19.6,21H17V23H23V17H21V19.59"
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
