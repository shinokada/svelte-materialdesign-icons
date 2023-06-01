<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'timeline remove outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-timeline-remove-outline"
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
    d="M4 8H2V2H4V8M2 22H4V16H2V22M3 10C1.9 10 1 10.9 1 12C1 13.11 1.9 14 3 14C4.11 14 5 13.11 5 12C5 10.9 4.11 10 3 10M13.88 15.54L16 13.41L18.12 15.53L19.53 14.12L17.41 12L19.53 9.88L18.12 8.47L16 10.59L13.88 8.47L12.47 9.88L14.59 12L12.47 14.12L13.88 15.54M24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6M22 6H10V18H22V6Z"
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
