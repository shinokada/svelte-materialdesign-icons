<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'hulu';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-hulu"
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
    d="M19.5,12.8V22H14.7V13.9C14.7,13.2 14.1,12.6 13.4,12.6H10.5C9.8,12.6 9.2,13.2 9.2,13.9V22H4.5V2H9.3V8.4C9.6,8.3 9.9,8.2 10.2,8.2H15C17.5,8.2 19.5,10.3 19.5,12.8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'hulu';
-->
