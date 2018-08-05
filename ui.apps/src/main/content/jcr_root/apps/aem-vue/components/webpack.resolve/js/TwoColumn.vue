<template>
    <div class="container">
        <div class="col">
            <slot name="column-one"></slot>
        </div>
        <div class="col">
            <slot name="column-two"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.container {
    width: 100%;
    display: flex;

    .col {
        flex: 1;
    }
}

</style>
