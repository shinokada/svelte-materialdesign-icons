<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'ticket account';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-ticket-account"
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
    d="M20,12A2,2 0 0,0 22,14V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V14C3.11,14 4,13.1 4,12A2,2 0 0,0 2,10V6C2,4.89 2.9,4 4,4H20A2,2 0 0,1 22,6V10A2,2 0 0,0 20,12M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5V16.25M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'ticket account';
-->
