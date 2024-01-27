<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'locker multiple';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-locker-multiple"
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
    d="M3,2H21A2,2 0 0,1 23,4V20A2,2 0 0,1 21,22H3A2,2 0 0,1 1,20V4A2,2 0 0,1 3,2M13,4V20H21V4H13M3,4V20H11V4H3M5,13H7V17H5V13M5,6H9V7.5H5V6M5,9H9V10.5H5V9M15,13H17V17H15V13M15,6H19V7.5H15V6M15,9H19V10.5H15V9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'locker multiple';
-->
