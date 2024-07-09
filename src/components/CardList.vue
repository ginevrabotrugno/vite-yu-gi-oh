<script>
import SingleCard from './SingleCard.vue';

export default {
    name: "CharactersList",
    components: {
        SingleCard
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="found">
                Found 39 Cards
            </div>
            <div class="row">
                <SingleCard />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

section {
    padding: 50px 0;

    .container {
        background-color: #fff;
        width: 85%;
        margin: 0 auto;
        padding-top: 50px;
        // debug
        min-height: 800px;

        .found {
            width: 90%;
            margin: 0 auto;
            padding: 20px;
            background-color: #212529;
            color: #fff;
            font-size: 18px;
            font-weight: bolder;
        }

        .row {
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

}


</style>