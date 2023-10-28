<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="app">
    <Navbar />
    
    <main>
        <slot></slot>
    </main>
    
    <Footer />
</div>

<style lang="scss">
    .app {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>