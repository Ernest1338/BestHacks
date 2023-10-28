<script>
	import { goto } from "$app/navigation";
    import { cookies } from "$lib";
    import { fly } from 'svelte/transition';

    // function logOut() {
    //     cookies.delete("loggedAs")
    //     cookies.delete("authkey")
    //     goto("/");
    //     location.reload();
    // }
</script>


<nav class="menu"   in:fly={{ x: 50, delay: 0, duration: 300 }} out:fly={{ x: -50, duration: 300 }}>
    <a class="menu-element" href="/user-profile">Profil</a>
    <a class="menu-element" href="/login">Zaloguj się</a>
    <a class="menu-element" href="/register">Zarejestruj się</a>

</nav>

<style lang="scss">

.menu {
    position: absolute;
    height: 100vh;
    width: 50vw;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 2px;
    padding: 20px 30px;

    .menu-element {
        color: #d8dcd6;
        font-size: 20px;
        font-weight: 600;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            color: #fff;
        }
    }
}
</style>