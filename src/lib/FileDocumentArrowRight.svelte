<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file document arrow right';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-file-document-arrow-right"
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
    d="M23 19L20 16V18H16V20H20V22L23 19M13 19C13 18.7 13 18.3 13.1 18H6V16H13.8C14.3 15.2 14.9 14.5 15.7 14H6V12H18V13.1C18.3 13 18.7 13 19 13S19.7 13 20 13.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H13.8C13.3 21.1 13 20.1 13 19M13 3.5L18.5 9H13V3.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file document arrow right';
-->
