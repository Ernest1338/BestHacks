<script>

    // export let id;
    export let name;
    export let employer;
    export let employer_logo;
    export let description;
    export let salary_min;
    export let salary_max;
    export let type_of_employment;
    // export let categories;
    // export let file;

</script>

<article>

        <img src="{employer_logo}" alt="{employer}" id="employer_logo">

        <section id="job_info">
            <h3 id="job_name">{name}</h3>

            <h4 id="employer_and_salary">
                    <strong>{employer}</strong>
                    <strong id="contract_and_salary"><span>Typ umowy: {type_of_employment}</span> <span> Pensja: {salary_min} - {salary_max} brutto</span></strong>
            </h4>
                
            <p id="description" style="font-size: 20px; padding:5px">
                {description}
            </p>
    
        </section>

</article>

<style>

    article {
        display: grid;
        border: 3px solid white;
        grid-template-columns: .2fr .8fr;
        align-items: center;
        justify-content: center;
        background-color: #303133;
        border-radius: 20px;
        -webkit-box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        -moz-box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        transition: 0.1s;
        cursor: pointer;
        color: antiquewhite;
        text-align: center;
    }
    #job_name {
        font-size: x-large;
    }

    h3, h4 {
        margin: 20px;
    }
    h4{
        font-size: xx-large;
    }
    #employer_and_salary {
        display: flex;
        flex-direction: column;
    }
    #contract_and_salary {
        display: flex;
        justify-content: space-between;
    }
    #employer {
        font-size: larger;
    }
    #employer_logo {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        align-self: center;
    }
    #job_info {
        font-size: larger;
        display: flex;
        flex-direction: column;
        
    }
    article:hover {
        background-color: #45474b;
    }

    #description {
        font-size: larger;
        color: #9c989f;
    }
</style>