<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'hand heart';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-hand-heart"
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
    d="M20 17Q20.86 17 21.45 17.6T22.03 19L14 22L7 20V11H8.95L16.22 13.69Q17 14 17 14.81 17 15.28 16.66 15.63T15.8 16H13L11.25 15.33L10.92 16.27L13 17H20M16 3.23Q17.06 2 18.7 2 20.06 2 21 3T22 5.3Q22 6.33 21 7.76T19.03 10.15 16 13Q13.92 11.11 12.94 10.15T10.97 7.76 10 5.3Q10 3.94 10.97 3T13.31 2Q14.91 2 16 3.23M.984 11H5V22H.984V11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'hand heart';
-->
