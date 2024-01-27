<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'bio';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-bio"
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
    d="M17,12H20A2,2 0 0,1 22,14V17A2,2 0 0,1 20,19H17A2,2 0 0,1 15,17V14A2,2 0 0,1 17,12M17,14V17H20V14H17M2,7H7A2,2 0 0,1 9,9V11A2,2 0 0,1 7,13A2,2 0 0,1 9,15V17A2,2 0 0,1 7,19H2V13L2,7M4,9V12H7V9H4M4,17H7V14H4V17M11,13H13V19H11V13M11,9H13V11H11V9Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'bio';
-->
