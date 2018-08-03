<template>
    <div class="text">
        Message: {{ message }}
    </div>
</template>

<script>
    export default {
        props: {
            message: String
        }
    }
</script>

<style scoped lang="scss">
    .text {
        color: red;
    }
</style>