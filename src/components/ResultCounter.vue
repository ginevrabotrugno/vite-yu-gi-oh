<script>
import { store } from '../store';

export default {
    name: "ResultCounter",
    data () {
        return {
            store,
        }
    },
    computed: {
        resultNumber() {
            return store.cardsList.length;
        }
    }
}
</script>

<template>
    <div class="found">
        Found <span>{{resultNumber}}</span> Cards
    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;


.found {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #212529;
    color: #fff;
    font-size: 18px;
    font-weight: bolder;

    span {
        font-size: 20px;
        padding: 8px;
        background-color: $main-bg-color;
        border-radius: 50%;
    }
}

</style>