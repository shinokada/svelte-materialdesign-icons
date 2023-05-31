<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'curtains closed';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-curtains-closed"
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
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
  viewBox="0 0 24 24"><path d="M23 3H1V1H23V3M2 22H11V4H2V22M22 4H13V22H22V4Z" /></svg
>
<!--
@component
[Go to Document](https://svelte-materialdesign-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
