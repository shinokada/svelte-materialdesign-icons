<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'microphone plus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-microphone-plus"
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
    d="M9,2A3,3 0 0,1 12,5V11A3,3 0 0,1 9,14A3,3 0 0,1 6,11V5A3,3 0 0,1 9,2M16,11C16,14.5 13.44,17.43 10,17.93V21H8V17.93C4.56,17.43 2,14.5 2,11H4A5,5 0 0,0 9,16A5,5 0 0,0 14,11H16M15,5H18V2H20V5H23V7H20V10H18V7H15V5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'microphone plus';
-->
