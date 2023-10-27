<div class="app">
    <nav></nav>
    
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