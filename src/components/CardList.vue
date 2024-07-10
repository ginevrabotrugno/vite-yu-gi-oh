<script>
import SingleCard from './SingleCard.vue';
// import dello store
import {store} from '../store';


export default {
    name: "CharactersList",
    components: {
        SingleCard
    },
    data () {
        return {
            store,
        }
    },
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <SingleCard v-for="card in store.cardsList" :key="card.id" :info="card"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

section {

    .container {
        background-color: #fff;

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