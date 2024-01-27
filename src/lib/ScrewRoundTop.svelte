<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'screw round top';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-screw-round-top"
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
    d="M13.5,17V19L12,22L10.5,19L13.5,17M14.5,6.3L13.5,7V6H10.5V9L9.5,9.7V10.7L14.5,7.4V6.3M14.5,10.3L13.5,11V9L10.5,11V13L9.5,13.7V14.7L14.5,11.4V10.3M14.5,14.3L13.5,15V13L10.5,15V17L9.5,17.7V18.7L14.5,15.4V14.3M7,5H17C17,5 16,2 12,2C8,2 7,5 7,5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'screw round top';
-->
