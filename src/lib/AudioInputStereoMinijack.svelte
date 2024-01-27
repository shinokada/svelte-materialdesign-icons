<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'audio input stereo minijack';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="mdi-audio-input-stereo-minijack"
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
    d="M11 4V3C11 2.45 11.45 2 12 2S13 2.45 13 3V4H11M13 9V5H11V9H9V15C9 16.3 9.84 17.4 11 17.82V22H13V17.82C14.16 17.4 15 16.3 15 15V9H13Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-materialdesign-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'audio input stereo minijack';
-->
