<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'email alert outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-email-alert-outline"
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
    d="M24 7H22V13H24V7M24 15H22V17H24V15M20 6C20 4.9 19.1 4 18 4H2C.9 4 0 4.9 0 6V18C0 19.1 .9 20 2 20H18C19.1 20 20 19.1 20 18V6M18 6L10 11L2 6H18M18 18H2V8L10 13L18 8V18Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'email alert outline';
-->
