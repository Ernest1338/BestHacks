<script>

export let width;
</script>

{#if width !== undefined}
<input type="text" name="search" id="searchbar" placeholder="wyszukaj firmę, stanowisko itp..." width="{width}">

{:else}
<input type="text" name="search" id="searchbar" placeholder="wyszukaj firmę, stanowisko itp..." style = "width:60%;">

{/if}

<style>
    input {
        padding: 10px;
        font-size: larger;
        text-align: center;
    }
    input:focus {
        border: solid 4px black;
    }


</style>