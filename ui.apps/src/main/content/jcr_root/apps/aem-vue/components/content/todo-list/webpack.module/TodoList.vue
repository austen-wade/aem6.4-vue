<template>
    <div class="list">
        <h1>{{ title }}</h1>
        <li v-for="item in list" :key="item">{{ item }}</li>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        list: Array
    }
}
</script>

<style>

</style>
