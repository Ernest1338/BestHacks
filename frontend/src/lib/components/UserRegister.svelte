<script lang="ts">
	import { backend } from "$lib";
	import type { UserRegisterData } from "$lib/objects";

    let registerData: UserRegisterData = {
        name: "",
		surname: "",
		email: "",
		password: "",
		tel: ""
	}
    
    function sendRegisterData() {
        backend.post("userregister", "martin", registerData);
    }


</script>

<form>
    <label for="name">Adres mailowy</label>
    <input type="text" name="name" bind:value={registerData.name}>
    <label for="surname">Adres mailowy</label>
    <input type="text" name="surname" bind:value={registerData.surname}>
    <label for="email">Adres mailowy</label>
    <input type="email" name="email" bind:value={registerData.email}>
    <label for="password">Hasło</label>
    <input type="password" name="password" bind:value={registerData.password}>
    <label for="tel">Adres mailowy</label>
    <input type="tel" name="tel" bind:value={registerData.tel}>
    <button type="submit" on:click={sendRegisterData}>Zarejestruj się</button>
</form>