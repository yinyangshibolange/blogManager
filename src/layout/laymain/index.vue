<template>
    <b-container fluid class="p-0">
        <lay-header class="fixed-top"></lay-header>
        <div style="padding-top: 56px; height: 100vh;">
            <router-view></router-view>
        </div>

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