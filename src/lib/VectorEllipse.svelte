<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'vector ellipse';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-vector-ellipse"
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
    d="M23,9V15H20.35C19.38,17.12 17.43,18.78 15,19.54V22H9V19.54C5.5,18.45 3,15.5 3,12C3,7.58 7.03,4 12,4C15.78,4 19,6.07 20.35,9H23M17,15V9H18.06C16.85,7.21 14.59,6 12,6C8.13,6 5,8.69 5,12C5,14.39 6.64,16.46 9,17.42V16H15V17.42C16.29,16.9 17.35,16.05 18.06,15H17M19,13H21V11H19V13M11,20H13V18H11V20Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'vector ellipse';
-->
