<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'email mark as unread';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-email-mark-as-unread"
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
    d="M18.84,7H16.22L10.5,4L4,7.41V17A2,2 0 0,1 2,15V7.17C2,6.5 2.28,6.06 2.81,5.81L10.5,2L18.05,5.81C18.5,6.09 18.78,6.5 18.84,7M7,8H20A2,2 0 0,1 22,10V19A2,2 0 0,1 20,21H7A2,2 0 0,1 5,19V10A2,2 0 0,1 7,8M20,11.67V10L13.5,13.31L7,10V11.67L13.5,15L20,11.67Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-materialdesign-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop color = 'currentColor';
@prop arialabel ='icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
