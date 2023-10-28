<script lang="ts">
	import { backend } from "$lib";
	import type { UserLoginData } from "$lib/objects";

    let loginData: UserLoginData = {
		email: "",
		password: ""
	}
    
    async function sendLoginData() {
        const status = await backend.post("userlogin", "martin", loginData);
        console.log(status);
    }


</script>

<form>
    <label for="email">Adres mailowy</label>
    <input type="email" name="email" bind:value={loginData.email}>
    <label for="password">Hasło</label>
    <input type="password" name="password" bind:value={loginData.password}>
    <button type="submit" on:click={sendLoginData}>Zaloguj się</button>
</form>

<style>

</style>