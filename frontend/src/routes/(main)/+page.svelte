<script lang="ts">
	import { backend } from "$lib";
	import Searchbar from "$lib/components/Searchbar.svelte";
</script>

<main>
	<h1 style="font-size: 32px;">Wyszukiwarka prac dla osób z niepełnosprawnościami</h1>
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
