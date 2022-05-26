<script>
	import { onMount } from 'svelte';
	import {
		Adjust,
		ArrowUpBoldOutline,
		Bucket,
		Card,
		ChatPlus,
		DataMatrix,
		Youtube,
		WifiSettings,
		Violin,
		Upload,
		Truck,
		Surfing,
		Snake,
		ScoreboardOutline,
		PuzzleOutline,
		PageLayoutFooter,
		NotebookEdit
	} from '$lib/index';
	const props = {
		size: '50',
		color: '#ff0000'
	};
	onMount(() => {
		const icon = new Card({ target: document.body, props });
	});
</script>

<h1 class="text-4xl flex justify-center py-8">SVELTE-Materialdesign-icons</h1>

<h2 class="text-3xl flex justify-center py-4">Size</h2>
<div class="container flex flex-wrap mx-auto justify-center">
	<Adjust size="50" />
	<ArrowUpBoldOutline size="50" />
	<Bucket size="50" />
	<Card size="50" />
	<ChatPlus size="50" />
	<DataMatrix size="50" />
	<Youtube size="50" />
	<WifiSettings size="50" />
	<Violin size="50" />
	<Upload size="50" />
	<Truck size="50" />
	<Surfing size="50" />
	<Snake size="50" />
	<ScoreboardOutline size="50" />
	<PuzzleOutline size="50" />
	<PageLayoutFooter size="50" />
	<NotebookEdit size="50" />
</div>

<h2 class="text-3xl flex justify-center py-4">Color</h2>
<div class="container flex flex-wrap mx-auto justify-center">
	<Adjust size="50" color="#ff2b2b" />
	<ArrowUpBoldOutline size="50" color="#2bff95" />
	<Bucket size="50" color="#9f2bff" />
	<Card size="50" color="#ffc32b" />
	<ChatPlus size="50" color="#1256cc" />
	<DataMatrix size="50" color="#cc12a0" />
	<Youtube size="50" color="#b6cc12" />
	<WifiSettings size="50" color="#36e2dd" />
	<Violin size="50" color="#6d2cb7" />
	<Upload size="50" color="#55b72c" />
	<Truck size="50" color="#318975" />
	<Surfing size="50" color="#db57a0" />
	<Snake size="50" color="#63136d" />
	<ScoreboardOutline size="50" color="#f9eb98" />
	<PuzzleOutline size="50" color="#b78dc9" />
	<PageLayoutFooter size="50" color="#ea9770" />
	<NotebookEdit size="50" color="#6dad99" />
</div>

<h2 class="text-3xl flex justify-center py-4">CSS framworks suport</h2>
<h3 class="text-2xl flex justify-center pb-4">Tailwind example</h3>
<div class="container flex flex-wrap mx-auto justify-center">
	<Adjust size="50" class="text-red-500" />
	<ArrowUpBoldOutline size="50" class="text-blue-500" />
	<Bucket size="50" class="text-green-500" />
	<Card size="50" class="text-pink-500" />
	<ChatPlus size="50" class="text-purple-500" />
	<DataMatrix size="50" class="text-gray-500" />
	<Youtube size="50" class="text-indigo-500" />
	<WifiSettings size="50" class="text-yellow-500" />
	<Violin size="50" class="text-blue-700" />
	<Upload size="50" class="text-red-700" />
	<Truck size="50" class="text-green-700" />
	<Surfing size="50" class="text-pink-700" />
	<Snake size="50" class="text-purple-700" />
	<ScoreboardOutline size="50" class="text-gray-700" />
	<PuzzleOutline size="50" class="text-indigo-700" />
	<PageLayoutFooter size="50" class="text-yellow-700" />
	<NotebookEdit size="50" class="text-red-300" />
</div>

<h2 class="text-3xl flex justify-center py-8">aria-label</h2>

<h2 class="text-3xl flex justify-center py-8">Other attributes</h2>

<Adjust color="#4daad6" size="50" ariaLabel="Adjust icon" tabindex="0" />

<svelte:component this={ChatPlus} />

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
</svelte:head>
