<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<section class="app">
    <Navbar />
    
    <slot></slot>
    
    <Footer />
</section>

<style lang="scss">
    .app {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
<<<<<<< HEAD


=======
>>>>>>> 8832b9179a0de9f215509b69c913b59f0d149ddc
    }
</style>