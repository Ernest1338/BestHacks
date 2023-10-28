<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="app">
    <Navbar />
    
    <main>
        <slot></slot>
    </main>
    
    <footer></footer>
</div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
    }
</style>