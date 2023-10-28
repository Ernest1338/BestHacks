<script>
	import { goto } from "$app/navigation";

</script>

<nav>
    <!-- <a href="http://localhost:5173/"> -->
        <img src="https://avatars.githubusercontent.com/u/47009191?v=4" alt="logo" on:click={() => {goto('/')} }>
    <!-- </a> -->

</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 2px solid;
    
    }
    img {
        height: 80px;
        width: 80px;
    }
</style>