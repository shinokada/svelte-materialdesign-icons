<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'application settings outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-application-settings-outline"
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
    d="M21 0H3C1.9 0 1 .9 1 2V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V2C23 .9 22.1 0 21 0M21 18H3V4H21V18M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'application settings outline';
-->
