<script lang="ts">
	import Searchbar from "$lib/components/Searchbar.svelte";
</script>

	<Searchbar width=60 />
	<div class="background"></div>

<style lang="scss">
	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		clip-path: polygon(0 0, 60% 0, 40% 100%, 0% 100%);
		background: $primary;
		z-index: -1;
	}
</style>