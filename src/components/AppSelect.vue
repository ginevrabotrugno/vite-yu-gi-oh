<script>
export default {
    name: 'AppSelect'
}
</script>

<template>
    <div class="container">
        <select name="sel">
            <option value="1">Option</option>
            <option value="2">Option</option>
            <option value="3">Option</option>
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