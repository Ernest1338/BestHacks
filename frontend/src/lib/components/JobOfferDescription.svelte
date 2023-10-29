<script>
export let description = "test"

</script>

<section id="description">
    <h3>Obowiązki</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui distinctio veritatis dolorem hic, laborum blanditiis illo eaque consequatur eum minima, fugiat officiis cumque modi quam! Aspernatur deleniti error accusamus architecto.
        In, unde nihil cum saepe quia, eum quod adipisci odit quos asperiores nemo facilis eius repudiandae aliquid necessitatibus ut voluptate, dicta recusandae voluptas? Consequatur</p>
    <h3>Przystosowania</h3>
        <p> vel ex impedit rerum soluta explicabo.
        Aliquid voluptatibus tempora vitae eligendi explicabo? Cum, quia tempore at reiciendis eum suscipit harum quasi ducimus, ad maxime libero debitis natus, illum eaque facere? Est recusandae eius odit. Excepturi, doloremque?
        Eius fugit quo ratione cupiditate autem corrupti veniam perspiciatis magnam! Sit laudantium nam est doloribus molestiae doloremque dolorem aliquam architecto explicabo </p>
    <h3>Opis stanowiska</h3>
        <p>
        delectus cupiditate neque ipsum voluptas quis consectetur, pariatur facilis?
        Nisi, rerum magnam? Eligendi explicabo odit beatae magnam officiis voluptatum cum dignissimos totam quos a assumenda ea, in voluptas quas? Provident autem, quae magnam aperiam eaque possimus repellat voluptatem inventore.
    </p>
    <form method="post" action="https://wp.pl">
        <label for="file">Wgraj swoje CV</label>
        <input id="file" name="file" type="file" />
        <button>Upload</button>
      </form>
    
</section>

<style lang="scss">
    *{
        color: $text;
    }
    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        width: 50%;
    }
#description {
    border-radius: 20px;
    margin: 30px 0 30px 0;
    width: 100%;
    min-height: 50vh;
    height: fit-content;
    background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border: 4px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h3 {
    font-size: 28px;
}
p {
    font-size: 20px;
    margin-left: 50px;
    margin-right: 50px;
}


</style>