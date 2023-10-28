<script>

export let width = 60;
</script>

<form style = "width:{width}%;">
    <input type="text" name="search" class="searchbar input_field" placeholder="wyszukaj firmę, stanowisko itp...">

    <section class="second_row">
        <input type="text" name="location" class="input_field" id="location_field">
        <input type="number" min="0" max="600" name="distance" class="input_field" id="distance_field" >
        <select name="categories" id="categories">
            <option value="stacjonarna">stacjonarna</option>
            <option value="hybrydowa">Hybrydowa</option>
            <option value="zdalne">Zdalna</option>
        </select>
    </section>
</form>


<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        font-size: 20px;

        .searchbar {
            width: 100%;
        }

        .input_field {
            font-size: larger;
            text-align: center;
        }

        select {
            padding: 10px;
            font-size: 20px;
            border-radius: 5px;
        }
        
        .second_row {
            width: 100%;
            display: flex;
            justify-content: space-around;

            input[type=number] {
                width: 20%;
            }

            input:focus {
                border: solid 4px black;
            }
        }
    }


</style>