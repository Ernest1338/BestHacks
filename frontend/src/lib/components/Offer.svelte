<script lang="ts">
	import { goto } from "$app/navigation";


    export let id: string;
    export let employer: string;
    export let employer_logo: string;
    export let job_title: string;
    export let description: string;
    export let salary_min: string;
    export let salary_max: string;
    export let excluded_disabilities: string;
    export let type_of_employment: string;
    export let location: string;
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
<a href="job-offer?id={id}">
    <article>
        <div class="left">
            <img src="{src}" alt="{employer}" id="employer_logo">
        </div>
        <div class="right">
            <div class="top">
                <span class="job_title">{job_title}</span>
                <span class="job_salary">{salary_min} - {salary_max} PLN</span>
            </div>
            <div class="bottom">
                <span class="job_type">Typ umowy: {type_of_employment}</span>
                <span class="job_location">{location}</span>
            </div>
        </div>
    </article>
</a>

<style lang="scss">
    article {
        color: white;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
        padding: 10px 5px;
        border-radius: 6px;
        background: #2a2a2a;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 0.2);
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 90px;
                height: 45px;
                border-radius: 5px;
                margin: 5px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 0 15px;
            width: 100%;

            .top {
                display: flex;
                justify-content: space-between;
            }

            .bottom {
                display: flex;
                justify-content: space-between;
            }
        }

        .job_title {
            font-size: 20px;
            font-weight: 600;
        }

        .job_salary {
            font-size: 18px;
        }

        .job_type {
            font-size: 16px;
        }

        .job_location {
            font-size: 16px;
        }

    }
</style>