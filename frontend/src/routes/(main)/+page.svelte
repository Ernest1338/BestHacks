<script lang="ts">
	import { backend } from "$lib";
	import Searchbar from "$lib/components/Searchbar.svelte";
	import { onMount } from "svelte";

	onMount(async () => {
		const xd = await backend.get("joboffers", "dawid");
		console.log(xd);
	});
</script>

<main>
	<h1>Wyszukaj pracy</h1>
	<Searchbar />
</main>

<style lang="scss">
	main {
		position: relative;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: $primary;

		h1 {
			font-size: 48px;
			margin-top: 0;
			color: white;
		}
	}
</style>