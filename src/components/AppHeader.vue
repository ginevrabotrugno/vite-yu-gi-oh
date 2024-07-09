<script>
export default {
    name: "AppHeader",
    data () {
        return {
            logoPath: "yugioh-logo.png",
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
}

</script>

<template>
    <header>

        <div>
            <img :src="getImagePath(`../assets/${logoPath}`)" alt="logo">        
        </div>
        <h1>
            Yu-Gi-Oh API
        </h1>
 
    </header>

</template>

<style scoped lang="scss">

    header {
        height: 80px;
        padding: 20px;

        div {
            display: inline-block;
            width: 150px;
            margin-right: 20px;

            img {
                width: 100%;
                aspect-ratio: 1/0,5;
                object-fit: cover;
            }
        }

        h1 {
            display: inline-block;
            height: 80px;
            line-height: 100%;
            vertical-align: middle;
        }


    }

</style>