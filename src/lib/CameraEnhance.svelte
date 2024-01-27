<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'camera enhance';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-camera-enhance"
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
    d="M9,3L7.17,5H4A2,2 0 0,0 2,7V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7A2,2 0 0,0 20,5H16.83L15,3M12,18A5,5 0 0,1 7,13A5,5 0 0,1 12,8A5,5 0 0,1 17,13A5,5 0 0,1 12,18M12,17L13.25,14.25L16,13L13.25,11.75L12,9L10.75,11.75L8,13L10.75,14.25"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'camera enhance';
-->
