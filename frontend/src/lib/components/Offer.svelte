<script>

    export let id;
    export let employer;
    export let employer_logo;
    export let job_title;
    export let description;
    export let salary_min;
    export let salary_max;
    export let excluded_disabilities;
    export let type_of_employment;
    export let location;
    // export let categories;
    // export let file;
    let src = "http://156.17.72.125:3001/get_logo?filename=" + employer_logo;
</script>

<!-- <article>

    <img src="{src}" alt="{employer}" id="employer_logo">

    <section id="job_info">
        <h3 id="job_name">{job_title}</h3>

        <h4 id="employer_and_salary">
            <strong>{employer}</strong>
            <strong id="contract_and_salary">
                <span>Typ umowy: {type_of_employment}</span>
                <span> Pensja: {salary_min} - {salary_max} brutto</span>
                <span>{location}</span>
            </strong>
        </h4>
            
        <p id="description" style="font-size: 20px; padding:5px">
            {description}
        </p>

    </section>

</article> -->

<article>
    <div class="left">
        <img src="{src}" alt="{employer}" id="employer_logo">
    </div>
    <div class="right">
        <div class="top">

        </div>
        <div class="bottom"></div>
    </div>
</article>

<style lang="scss">
    article {
        display: flex;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100px;
            }
        }
    }
</style>