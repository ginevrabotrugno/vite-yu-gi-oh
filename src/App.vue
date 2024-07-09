<script>
// import di axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CardList.vue';

// import dello store
import {store} from './store';

export default {
    name: 'App',
    components: {
        AppHeader,
        CharactersList,
    },
    data () {
        return {
            store,
        }
    }
}
</script>

<template>
    <AppHeader />
    <main>
        <CharactersList />
    </main>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
