<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'mouse off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-mouse-off"
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
    d="M2,5.27L3.28,4L20,20.72L18.73,22L17.5,20.79C16.08,22.16 14.14,23 12,23A8,8 0 0,1 4,15V11H7.73L5.73,9H4C4,8.46 4.05,7.93 4.15,7.42L2,5.27M11,1.07V9H10.82L5.79,3.96C7.05,2.4 8.9,1.33 11,1.07M20,11V15C20,15.95 19.83,16.86 19.53,17.71L12.82,11H20M13,1.07C16.94,1.56 20,4.92 20,9H13V1.07Z"
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
