<script>
// import di axios
import axios from 'axios';
// import dello store
import { store } from "../store";

export default {
    name: 'AppSelect',
    data() {
        return {
            store,
        }
    },
    methods: {
        getArchetype(){
            axios.get(store.apiEndpoint)
            .then(res => {
                console.log(res.data);
                store.archetypesList = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created(){
        this.getArchetype();
    }

}
</script>

<template>
    <div class="container">
        <select v-model="store.searchArchetype" @change="$emit('selectArchetype')">
            <option v-for="(archetype, i) in store.archetypesList" :key="i" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>

</template>

<style scoped lang="scss">

    .container {
        padding: 20px 10px;

        select {
            width: 200px;
            padding: 8px 15px;
            background-color: #fff;
            border: none;
            border-radius: 5px;
        }
    }

</style>