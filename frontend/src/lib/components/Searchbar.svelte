<script>

export let width = 60;
</script>

<form action="" style = "width:{width}%;">
    <input type="text" name="search" id="searchbar" placeholder="wyszukaj firmę, stanowisko itp..." class="input_field">

    <section id="second_row">
        <input type="text" name="location" class="input_field" id="location_field">
        <input type="number" name="distance" class="input_field" id="distance_field">
        <select name="cars" id="categories">
            <option value="stacjonarna">stacjonarna</option>
            <option value="hybrydowa">Hybrydowa</option>
            <option value="zdalne">Zdalna</option>
        </select>
    </section>


</form>


<style>
    form {
        font-size: 20px;
    }
    select {
        padding: 10px;
        font-size: 20px;
        border-radius: 5px;
        
    }
    #searchbar {
        width: 100%;
    }
    .input_field {
        font-size: larger;
        text-align: center;
    }
    #second_row {
        display: flex;
    }
    input[type=number] {
        width: 20%;
    }
    input:focus {
        border: solid 4px black;
    }


</style>