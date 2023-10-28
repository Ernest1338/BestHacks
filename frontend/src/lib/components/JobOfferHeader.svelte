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
                <section id="info_section">
                    <h1>
                        {name}
                    </h1>
                    <section id="info_section2">
                        <h4>
                            {employer}
                        </h4>
                        <h4>
                            {localisation}
                        </h4>
                    </section>
                    <section>
                        <h2>
                            {salary_min} - {salary_max} brutto
                        </h2>
                    </section>
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
    *{
        align-items: center;
        justify-content: center;
    }
img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
}
header {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #111;
}
#job_info {
    background: #999;
    display: flex;
    width: 100%;
}
#employment_info {
    width: 100%;
    display: flex;
    background-color: antiquewhite;
}
#info_section {
    display: flex;
    flex-direction: column;   
}
#info_section2 {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

</style>