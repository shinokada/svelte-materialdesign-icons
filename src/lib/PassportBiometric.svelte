<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'passport biometric';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-passport-biometric"
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
    d="M4,4A2,2 0 0,0 2,6V11H8.13C8.59,9.24 10.18,8 12,8C13.82,8 15.41,9.24 15.87,11H22V6A2,2 0 0,0 20,4H4M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M2,13V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V13H15.87C15.41,14.76 13.82,16 12,16C10.18,16 8.59,14.76 8.13,13H2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'passport biometric';
-->
