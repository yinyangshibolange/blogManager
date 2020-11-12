<template>
    <b-container fluid class="artical-view">
        <b-row>
            <b-col cols="0" md="4">
                <tags></tags>
            </b-col>
            <b-col cols="12" md="8" class="border-left">
                <router-view></router-view>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
    import tags from '../../components/tags'

    export default {
        name: "index",
        components: {
            tags
        }

    }
</script>

<style scoped>
    .artical-view.container-fluid,
    .artical-view.container-fluid .row,
    .artical-view.container-fluid .row > div {
        height: 100%;
    }
</style>