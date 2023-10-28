<script>

    // export let id;
    export let job_name;
    export let employer;
    export let short_desc;
    // export let categories;
    // export let file;

</script>

<article>
    <!-- {id} -->
    <h3>{job_name}</h3>
    <!-- <address class="author">By <a rel="author" href="/author/john-doe">}</a></address>  -->
    <p>
        <span id="author">Authors:</span>
        <span id="authors">
        {#if employer != undefined  && employer.join(" ").lenght > 50}
            {employer.join(" ").slice(0, 47)}...
        {:else}
            {employer}
        {/if}
        </span>
    </p>

    <p id="description">
        {short_desc}
    </p>
    <!-- <p>
        {categories}
    </p> -->
    <!-- {file} -->
</article>

<style>

    article {
        margin:0px 20px  20px 0;
        background-color: #303133;
        border-radius: 20px;
        -webkit-box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        -moz-box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        transition: 0.1s;
        cursor: pointer;
        color: antiquewhite;
    }
    h3 {
        margin-left: 20px;
        font-size: 20px;
    }
    article:hover {
        background-color: #45474b;
    }

    #author {
        margin-left: 22px;
        font-size: 16px;
    }
    #authors {
        font-size: 12px;
    }
    #description {
        margin-left: 20px;
        margin-top: 10px;
        font-size: 13px;
        color: #9c989f;
    }
</style>