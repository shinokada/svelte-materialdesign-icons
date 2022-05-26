<script>
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
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
</svelte:head>

<h1 class="text-center p-5">Bootstrap example</h1>

<div class="container">
	<Adjust size="50" class="text-primary" />
	<ArrowUpBoldOutline size="50" class="text-secondary" />
	<Bucket size="50" class="text-info" />
	<Card size="50" class="text-warning" />
	<ChatPlus size="50" class="text-danger" />
	<DataMatrix size="50" class="text-success" />
	<Youtube size="50" class="text-default" />
	<WifiSettings size="50" class="text-muted" />
	<Violin size="50" class="text-white bg-dark" />
	<Upload size="50" class="text-white bg-primary" />
	<Truck size="50" class="text-white bg-secondary" />
	<Surfing size="50" class="text-white bg-info" />
	<Snake size="50" class="text-white bg-warning" />
	<ScoreboardOutline size="50" class="text-white bg-danger" />
	<PuzzleOutline size="50" class="text-white bg-success" />
	<PageLayoutFooter size="50" class="text-white bg-light" />
	<NotebookEdit size="50" class="text-white bg-dark" />
</div>
