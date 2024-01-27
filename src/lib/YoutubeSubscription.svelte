<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'youtube subscription';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-youtube-subscription"
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
    d="M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'youtube subscription';
-->
