<template>
    <b-container fluid class="p-0">
        <lay-header></lay-header>

        <router-view></router-view>
    </b-container>
</template>

<script>
    import layHeader from '../layheader'

    export default {
        name: "index",
        components: {
            layHeader
        }
    }
</script>

<style scoped>

</style>