<script>
export default {
    name: 'SingleCard',
    props: ['info'],
}

</script>

<template>
    <div class="card">
        <div class="img">
            <img :src="info.card_images[0].image_url" :alt="info.name">        </div>
        <h3>{{info.name}}</h3>
        <span v-if="info.archetype">{{info.archetype}}</span>
        <span v-else>Unknown Archetype</span>
    </div>
</template>

<style scoped lang="scss">

@use '../style/partials/variables' as *;

    .card {
        width: calc((100% / 5) - 20px);
        text-align: center;
        background-color: $main-bg-color;
        padding-bottom: 20px;
        margin-bottom: 25px;

        .img {
            width: 100%;
        }

        h3 {
            color: #fff;
            margin: 20px 0;
        }

        span {
            font-size: 20px;
        }
    }

</style>