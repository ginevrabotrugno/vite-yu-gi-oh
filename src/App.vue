<script>
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CardList.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        CharactersList,
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
