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


<nav class="menu"   in:fly={{ x: 500, delay: 0, duration: 300 }} out:fly={{ x: 500, duration: 300 }}>
    <a class="menu-element" href="/user-profile">Profil</a>
    <a class="menu-element" href="/login">Zaloguj się</a>
    <a class="menu-element" href="/register">Zarejestruj się</a>

</nav>

<style lang="scss">

.menu {
    background-color: $primary;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 500px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

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