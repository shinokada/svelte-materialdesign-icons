<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'message off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-message-off"
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
    d="M20.95 17.75L5.2 2H20C21.1 2 22 2.89 22 4V16C22 16.76 21.57 17.41 20.95 17.75M2.39 1.73L1.11 3L2 3.9C2 3.93 2 3.97 2 4V22L6 18H16.11L20.84 22.73L22.11 21.46L2.39 1.73Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'message off';
-->
