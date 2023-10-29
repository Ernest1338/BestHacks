<script>
    import { goto } from '$app/navigation';

</script>

<form action="company-register.php" method="post">
    <section id="double">

        <section id="left">
            <h1>Zarejestruj firmę</h1>
            <label for="mail">Email</label>
            <input type="email" name="mail">
            
            <label for="name">Imię</label>
            <input type="text" name="name">
            
            <label for="password">Hasło</label>
            <input type="password" form="password">
            
            <label for="surname">Nazwisko</label>
            <input type="text" form="surname">
            
            <label for="phone">Telefon</label>
        <input type="tel" id="phone" name="phone">
        
        <label for="nazwa_firmy">Nazwa firmy</label>
        <input type="text" form="nazwa_firmy">
        
    </section>
    <section id="right">

        
        <label for="REGON">REGON</label>
        <input type="text" form="REGON">
        
        <label for="nip">NIP</label>
        <input type="text" form="nip">
        
        <label for="country">Kraj</label>
        <input type="text" form="country">
        
        <label for="region">region</label>
        <input type="text" form="region">
        
        <label for="Miasto">Miasto</label>
        <input type="text" form="Miasto">
        
        <label for="Kod_pocztowy">Kod pocztowy</label>
        <input type="text" form="Kod_pocztowy" pattern="[0-9]{5}">
        
        <label for="adres">Adres</label>
        <input type="text" form="adres">
    </section>
</section>
    <section id="btn_section">
        <button type="submit">Zarejestruj się</button>

        <p class="signup">Masz konto?<button id="gotolog" type="button" on:click={() => goto("/login")}>Zaloguj się</button></p>

    </section>
</form>

<style>
    p {
        margin: 25px 0 0 0;
        font-size: 14px;
        width: 100%;
        text-align: center;


    }
    #gotolog {
            border: none;
            color: #b67ede;
            background: none;
            font-weight: bold;
            cursor: pointer;
        }
        h1 {
            color: #000;
            font-family: 'DM Sans', serif;
            font-size: 36px;
            margin: 0;
            margin-bottom: 15px;
        }
    form {
        width: fit-content;
        font-family: 'DM Sans', serif;
        padding: 30px;
        background: #fff;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;

    }
    #double {
        display: grid;
        grid-template-columns: .5fr .5fr;
        grid-auto-rows: auto;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    label {
        font-size: 20px;
    }
    section {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    input[type="text"], input[type="password"], input[type="tel"], input[type="email"], button[type="submit"] {
            font-family: 'DM Sans', serif;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #333;
            font-weight: 300;
        }
    button[type="submit"] {
            font-family: 'Raleway', serif;
            margin-top: 25px;
            background: #fff200;
            cursor: pointer;
            font-size: 1em;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 4px solid transparent;
            color: white;
            font-weight: 600;
            padding: 10px;
        }

</style>