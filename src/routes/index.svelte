<script>
	import { onMount } from 'svelte';
	import { Adjust, ArrowUpBoldOutline, Bucket, Card, ChatPlus, DataMatrix } from '$lib/index';
	const props = {
		size: '40',
		color: '#ff0000'
	};
	onMount(() => {
		const icon = new Card({ target: document.body, props });
	});
</script>

<h1 class="text-3xl flex justify-center py-8">SVELTE-Materialdesign-icons</h1>
<div class="container flex flex-wrap mx-auto justify-center">
	<Adjust color="#4daad6" size="50" ariaLabel="Adjust icon" tabindex="0" />
	<ArrowUpBoldOutline size="50" />
	<Bucket size="50" />
	<Card size="50" />
	<ChatPlus size="50" />
	<DataMatrix size="100" class="p-4 text-red-500" />
	<svelte:component this={ChatPlus} />
</div>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
</svelte:head>
