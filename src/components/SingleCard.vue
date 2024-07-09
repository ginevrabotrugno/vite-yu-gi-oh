<script>
export default {
    name: 'SingleCard',
}
</script>

<template>
    <div class="card">
        <div class="img">
            <!-- img -->
        </div>
        <h3>Card Title</h3>
        <span>Alien</span>
    </div>
</template>

<style scoped lang="scss">
    .card {
        width: calc((100% / 5) - 20px);
        text-align: center;
        background-color: #d48f38;
        padding-bottom: 20px;

        .img {
            width: 100%;
            // debug
            height: 250px;
            background-color: red;
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