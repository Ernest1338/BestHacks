<script lang="ts">
	import { backend } from "$lib";
	import Offer from "$lib/components/Offer.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";
	import type { JobOfferData } from "$lib/objects";
	import { onMount } from "svelte";
    
    let offers = [];
    onMount(async () => {
        offers = await backend.get("joboffers", "dawid");
        console.log(offers);
    })

</script>

<Searchbar />
<main>
<section id="filters">

</section>
<section id="offers">
    {#each offers as offer}
    <article>
        <Offer {...offer}/>
    </article>
    {/each}

</section>
</main>

<style lang="scss">

main {
    background: $primary;
    position: relative;
    flex-grow: 1;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    }
    #offers {
        margin-top: 100px;
        margin-right: 50px;
    }
    article {
        margin-top: 40px;
        margin-bottom: 40px;
    }

</style>