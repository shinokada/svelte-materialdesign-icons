<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'chair school';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-chair-school"
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
    d="M22,5V7H17L13.53,12H16V14H14.46L18.17,22H15.97L15.04,20H6.38L5.35,22H3.1L7.23,14H7C6.55,14 6.17,13.7 6.04,13.3L2.87,3.84L3.82,3.5C4.34,3.34 4.91,3.63 5.08,4.15L7.72,12H12.1L15.57,7H12V5H22M9.5,14L7.42,18H14.11L12.26,14H9.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'chair school';
-->
