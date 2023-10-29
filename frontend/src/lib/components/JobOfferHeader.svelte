<script>
	import BasicJobInfo from "./BasicJobInfo.svelte";

    export let name="pakowacz";
    export let employer="pecetserwis";
    export let employer_logo = "https://http.cat/401";
    export let description = "działa";
    export let salary_min = 3600;
    export let salary_max = 3600;
    export let offer_type = "UoP";
    export let type_of_employment = "Zdalna";
    export let localisation="Wałbrzysz";
    export let wymiar_pracy = "Pełen etat"
    

</script>


<header id="info">

        <section id="job_info">     
                <img src="{employer_logo}" alt="{employer}">        

                    <section id="info_section2">
                            <h1>
                            {name}
                            </h1>
                            <p><strong>{employer}</strong></p>
                            <p>{localisation}</p>
                            <p>{salary_min} - {salary_max} brutto</p>
                </section>
        </section>
        <section id="employment_info">
            <BasicJobInfo up = "Wymiar pracy", down={wymiar_pracy}/>
            <BasicJobInfo up = "Dowświadczenie", down="Niewymangane" />
            <BasicJobInfo up = "Typ umowy", down = {offer_type} />
            <BasicJobInfo up = "Tryb pracy", down = {type_of_employment} />
        </section>
</header>


<style lang="scss">

img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin: 0 10px 0 10px;
}
p {
    margin-left: 10px;
    margin-right: 10px;
}

header {
    color: $text;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    height: 250px;
    width: 100%;
    background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border: 4px solid transparent;}
#job_info {
    display: flex;
    align-items: center;
    height: 100%;
    background: transparent;
}
#employment_info {
    background: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#info_section {
    background: transparent;
    display: flex;
    flex-direction: column;   
}
#info_section2 {
    width: 100%;
}

</style>