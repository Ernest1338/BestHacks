<script lang="ts">
	import Searchbar from "$lib/components/Searchbar.svelte";
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
			color: white;
		}
	}
</style>