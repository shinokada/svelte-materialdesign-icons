<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'emoticon confused outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-emoticon-confused-outline"
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
    d="M20 12A8 8 0 1 0 12 20A8 8 0 0 0 20 12M22 12A10 10 0 1 1 12 2A10 10 0 0 1 22 12M15.5 8A1.5 1.5 0 1 1 14 9.5A1.54 1.54 0 0 1 15.5 8M10 9.5A1.5 1.5 0 1 1 8.5 8A1.54 1.54 0 0 1 10 9.5M17 15H13A4 4 0 0 0 9.53 17L7.8 16A6 6 0 0 1 13 13H17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'emoticon confused outline';
-->
