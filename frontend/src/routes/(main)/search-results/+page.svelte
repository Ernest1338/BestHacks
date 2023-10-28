<script lang="ts">
	import Offer from "$lib/components/Offer.svelte";
	import type { JobOfferData } from "$lib/objects";
    
    let offer_info: JobOfferData = {
		name: "Pakowacz słodyczy",
        employer: "CandyPol",
		employer_logo: "https://http.cat/401",
		description: "Prosta praca manualna nie wymagająca dużej sprawności ruchowej Prosta praca manualna nie wymagająca dużej sprawności ruchowej Prosta praca manualna nie wymagająca dużej sprawności ruchowej ",
        salary_min: 3600,
        salary_max: 4500,
	}


</script>

<main>
<section id="filters">

</section>
<section id="offers">

    <Offer {...offer_info}/>

</section>
</main>

<style lang="scss">

main {
    background: $primary;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    }
    #offers {
        margin-top: 100px;
        margin-right: 50px;
    }

</style>