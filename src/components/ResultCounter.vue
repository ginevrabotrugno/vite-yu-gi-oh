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
        Found {{resultNumber}} Cards
    </div>

</template>

<style scoped lang="scss">
.found {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #212529;
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
}

</style>