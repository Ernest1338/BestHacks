<script lang="ts">
	import { backend, searchResult } from "$lib";
	import Offer from "$lib/components/Offer.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";

    let offers = searchResult;
    console.log(offers)
</script>

<main>
<section id="search">
    <Searchbar />
</section>
<section id="filters">
    <h2>Tytuł</h2>
    <input type="text" placeholder="Tytuł pracy">
    <h2>Kategoria</h2>
    <input type="text" placeholder="Kategoria">
    <h2>Lokalizacja</h2>
    <input type="text" placeholder="Lokalizacja">
    <h2>Niepełnosprawności</h2>
    <input type="text" placeholder="Niepełnosprawności">
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
        margin: 40px 0;
    }

    #offers {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        padding: 30px 20px;
    }

    #filters {
        padding: 0 20px;
        color: white;
        display: flex;
        flex-direction: column;

        input {
            border-radius: 20px;
            border: none;
            padding: 10px 15px;
            background: linear-gradient(#303133, #303133) padding-box, linear-gradient(90deg, #ed6e61, #6359e1) border-box;
            border: 4px solid transparent;
            color: white;
        }
    }

</style>
