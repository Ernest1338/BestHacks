<script>

    // export let id;
    export let name;
    export let employer;
    export let employer_logo;
    export let description;
    export let salary_min;
    export let salary_max;
    // export let categories;
    // export let file;

</script>

<article>


    <section id="job_offer">
        <img src="{employer_logo}" alt="logo{employer}" id="employer_logo">
        <section id="job_info">
            <h3 id="job_name">{name}</h3>

            <section id="employer_and_salary">
                <h4 id="employer">{employer}
                <h4 id="salary">
                    <strong>Pensja: {salary_min} - {salary_max} brutto</strong>
                </h4>
                </h4>
            </section>
                
            <section id="description" style="font-size: 20px; padding:5px">
                {description}
            </section>
    
        </section>
    </section>

</article>

<style>

    article {
        display: grid;
        /* margin:0px 20px  20px 0; */
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
    section {
        display: flex;
    }

    #employer_and_salary {
        display: flex;
        flex-direction: row;
    }
    #salary {
        font-size: larger;
    }
    #employer {
        font-size: larger;
    }
    #employer_logo {
        margin: 10px;
        width: 100px;
        height: 100px;
        border-radius: 30px;
    }
    #job_offer {
        display: flex;
        align-items: center;
    }
    #job_info {
        font-size: larger;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    article:hover {
        background-color: #45474b;
    }

    #description {
        font-size: 13px;
        color: #9c989f;
    }
</style>