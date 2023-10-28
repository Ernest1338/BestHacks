<script>
    export let up;
    export let down;
</script>

    <div class="basic_info">
        <p class="top">
            {up}
        </p>
        <p class="bottom">
            {down}
        </p>
    </div>

<style>
    #basic_info {
        display: flex;
        flex-direction: column;
    }
    p {
        margin: 20px;
    }
</style>