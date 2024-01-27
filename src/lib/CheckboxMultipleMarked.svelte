<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'checkbox multiple marked';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-checkbox-multiple-marked"
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
    d="M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'checkbox multiple marked';
-->
