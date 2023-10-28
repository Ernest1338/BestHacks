<script>

export let width = 60;
</script>

<form action="" style = "width:{width}%;">
    <input type="text" name="search" id="searchbar" placeholder="wyszukaj firmę, stanowisko itp..." class="input_field">
    <input type="text" name="location" class="input_field" id="location_field">
    <input type="number" name="distance" class="input_field" id="distance_field">


</form>


<style>
    form {
        
    }
    .input_field {
        font-size: larger;
        text-align: center;
    }
    input[type=number] {
        width: 20%;
    }
    input:focus {
        border: solid 4px black;
    }


</style>