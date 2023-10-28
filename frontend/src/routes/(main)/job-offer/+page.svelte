<script>
	import JobOfferDescription from "$lib/components/JobOfferDescription.svelte";
import JobOfferHeader from "$lib/components/JobOfferHeader.svelte";


</script>

<main>
    <div>
        <JobOfferHeader />
        <JobOfferDescription />
    </div>
    
</main>

<style lang="scss">
    main {
        width: 100vw;
        background: $primary;
        position: relative;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div {
        width: 50%;
    }

</style>