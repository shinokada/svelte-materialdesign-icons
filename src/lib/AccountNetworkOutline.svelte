<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'account network outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-account-network-outline"
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
    d="M12,10A3.5,3.5 0 0,0 15.5,6.5A3.5,3.5 0 0,0 12,3A3.5,3.5 0 0,0 8.5,6.5A3.5,3.5 0 0,0 12,10M12,5A1.5,1.5 0 0,1 13.5,6.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 10.5,6.5A1.5,1.5 0 0,1 12,5M15,20A1,1 0 0,0 14,19H13V17H19V15.5C19,13.57 15.87,12 12,12C8.13,12 5,13.57 5,15.5V17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15M7.61,15C8.39,14.53 9.89,14 12,14C14.11,14 15.61,14.53 16.39,15H7.61Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'account network outline';
-->
