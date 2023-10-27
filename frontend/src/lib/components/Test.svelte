<script lang="ts">
	import { assets, backend } from "$lib";
	import type { User } from "$lib/objects";

	function getUser() {
		return backend.get<User>("test");
	}
</script>

<p>test</p>
<img src="{assets.getAssetUrl('test.png')}" alt="test">

{#await getUser()}
	<p>waiting</p>
{:then user}
	<p>{user.name}</p>
{/await}