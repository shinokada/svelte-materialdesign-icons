<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'monitor share';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-monitor-share"
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
    d="M23 4V16C23 17.11 22.11 18 21 18H15V16H21V4H3V16H9V18H3C1.9 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4M13 13H16L12 9L8 13H11V20H8V22H16V20H13V13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'monitor share';
-->
