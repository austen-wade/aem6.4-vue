<template>
    <div class="text">
        <h1>Hello World!</h1>
        <p>hello there: {{ message }}</p>
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