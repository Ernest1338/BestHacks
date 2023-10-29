<script>
    import { fly } from 'svelte/transition';

    // loginutil.logout();
</script>


<nav class="menu" in:fly={{ x: 300, delay: 0, duration: 300 }} out:fly={{ x: 300, duration: 300 }}>
    <a class="menu-element" href="/user-profile">Profil</a>
    <a class="menu-element" href="/login">Zaloguj się</a>
    <a class="menu-element" href="/register">Zarejestruj się</a>
    <a class="menu-element" href="/companylogin">Zaloguj się jako firma</a>
    <a class="menu-element" href="/companyregister">Zarejestruj się jako firma</a>
</nav>

<style lang="scss">

.menu {
    pointer-events: auto;
    background-color: $secondary;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 300px;
    border-radius: 10px 0 0 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.649);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;

    .menu-element {
        color: white;
        font-size: 26px;
        font-weight: 600;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        width: 90%;
        padding: 5px 0;
        margin: 4px 5px;
        border-radius: 4px;

        &:hover {
            color: #fff;
            background: #ffffff0a;
        }
    }
}
</style>
