<script>
    import Fa from 'svelte-fa'
    import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

    export let width = 60;
    let query = "";

    function sendQuery() {

    }
</script>


<form id="searchbar">
    <input type="text" name="search" id="search" bind:value={query} placeholder="Wyszukaj publikacje...">
    <button type="submit" id="icon" on:click={sendQuery}>
        <Fa icon={faMagnifyingGlass} on:click={sendQuery} size="1x" color="#8f9a9c"/>
    </button>
</form>
<!-- <form style = "width:{width}%;">
    <input type="text" name="search" class="searchbar input_field" placeholder="wyszukaj firmę, stanowisko itp...">

    <section class="second_row">
        <input type="text" name="location" class="input_field" id="location_field" placeholder="Lokacja">
        <input type="text" min="0" max="600" name="disabilities" class="input_field" placeholder="Dystans">
        <select name="categories" id="categories" class="input_field">
            <option value="stacjonarna">stacjonarna</option>
            <option value="hybrydowa">Hybrydowa</option>
            <option value="zdalne">Zdalna</option>
        </select>
    </section>
</form> -->


<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        font-size: 20px;

        .searchbar {
            width: 100%;
        }

        .input_field {
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
        }
    }

    #searchbar {
        width: 600px;
        position: relative;

        input {
            width: 100%;
            border: none;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 4px solid transparent;
            border-radius: 30px;
            text-align: left;
            color: #f9f1ff;
            font-size: 18px;
            padding: 10px 15px;
            font-family: "DM Sans";
            box-shadow: none;
            transition: box-shadow 0.3s;

            &:focus {
                outline: none;
                -webkit-box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
                -moz-box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
                box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
            }
        }

        #icon {
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            border: none;
            background: transparent;
        }
    }


</style>