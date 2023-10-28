<script lang="ts">
	import Searchbar from "$lib/components/Searchbar.svelte";
</script>

<main>
	<Searchbar width=60 />
</main>

<style lang="scss">
	main {
		position: relative;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>