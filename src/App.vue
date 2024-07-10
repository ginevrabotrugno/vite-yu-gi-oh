<script>
// import di axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CardList.vue';
import AppSelect from './components/AppSelect.vue';

// import dello store
import {store} from './store';

export default {
    name: 'App',
    components: {
        AppHeader,
        CharactersList,
        AppSelect,
    },
    data () {
        return {
            store,
        }
    },
    methods: {
        getCard () {
            let endpoint = store.apiURL;

            if (store.searchArchetype !== "") {
                endpoint += `&${store.apiArchetypeParam}=${store.searchArchetype}`
                console.log(endpoint);
            }

            axios.get(endpoint)
            .then (res => {
                console.log(res.data.data);
                store.cardsList = res.data.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created(){
        this.getCard();
    }
}
</script>

<template>
    <AppHeader />
    <main>
        <AppSelect @selectArchetype="getCard"/>
        <CharactersList />
    </main>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
