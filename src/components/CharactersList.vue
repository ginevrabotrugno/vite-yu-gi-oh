<script>
export default {
    name: "CharactersList",
}
</script>

<template>
    <section>
        <div class="container">
            <div class="found">
                Found 39 Cards
            </div>
            <div class="row">

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

section {
    padding: 50px 0;

    .container {
        background-color: #fff;
        width: 80%;
        margin: 0 auto;
        padding-top: 50px;
        // debug
        min-height: 800px;

        div {
            width: 90%;
            margin: 0 auto;
        }

        .found {
            padding: 20px;
            background-color: #212529;
            color: #fff;
            font-size: 18px;
            font-weight: bolder;
        }
    }

}


</style>