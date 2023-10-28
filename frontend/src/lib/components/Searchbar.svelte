<script>

export let width = 60;
</script>

<form style = "width:{width}%;">
    <input type="text" name="search" class="searchbar input_field" placeholder="wyszukaj firmę, stanowisko itp...">

    <section class="second_row">
        <input type="text" name="location" class="input_field" id="location_field" placeholder="Lokacja">
        <input type="number" min="0" max="600" name="distance" class="input_field" id="distance_field" placeholder="Dystans">
        <select name="categories" id="categories" class="input_field">
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
        row-gap: 10px;
        font-size: 20px;

        .searchbar {
            width: 100%;
        }

        input.input_field {
            font-size: larger;
            text-align: center;
            border-radius: 15px;
            border: none;
            padding: 10px;
            font-weight: 300;
            font-family: 'DM Sans';
            box-shadow: 0 0 10px #17171774;

            &[type=number] {
                width: 200px;
            }
        }
        
        .second_row {
            width: 100%;
            display: flex;
            column-gap: 10px;

            select {
                padding: 10px;
                font-size: 20px;
                border-radius: 5px;
            }
        }
    }


</style>