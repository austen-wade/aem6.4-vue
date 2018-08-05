<template>
    <div class="text">
        <h1>{{ message }}</h1>
        <slot></slot>
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