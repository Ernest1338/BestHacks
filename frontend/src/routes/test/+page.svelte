<script>
	import { backend } from "$lib";
	import Filters from "$lib/components/Filters.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";
	import { onMount } from "svelte";

	onMount(async () => {
		let result = await backend.post("userregister", "martin", {
			email: "",
			name: "sdsd",
			surname: "",
			password: "",
			phone: ""
		});
		console.log(JSON.parse(result));
	});
</script>

<Searchbar />
<Filters />