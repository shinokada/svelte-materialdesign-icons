<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'turnstile';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-turnstile"
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
    d="M22,22H16V11L10,5V2H22V22M9.17,6.17C8.42,6.92 8,7.94 8,9H2V11H8.55C8.9,11.6 9.4,12.1 10,12.45V19H12V13C13.06,13 14.08,12.58 14.83,11.83L9.17,6.17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'turnstile';
-->
