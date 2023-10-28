<script lang="ts">
	import { backend, searchResult } from "$lib";
	import Offer from "$lib/components/Offer.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";
	import type { JobOfferData } from "$lib/objects";
	import { onMount } from "svelte";
    
    let offers = searchResult;
    console.log(offers)


</script>

<main>
<section id="search">
    <Searchbar />
</section>
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
    grid-template-areas: 
            "search search search"
            "filter offer offer"
            "filter offer offer";
    grid-template-columns: 0.3fr 0.7fr;
    grid-auto-rows: max-content;
    
    }
    #search {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        grid-area: search;
        width: 100%;
        margin: 40px 0 20px 0;
    }
    #offers {
        grid-area: offer;
        margin-right: 50px;
    }
    article {
        margin-top: 40px;
        margin-bottom: 40px;
    }

</style>