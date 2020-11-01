<template>
    <b-container fluid>
        <b-row>
            <b-col cols="0" md="4">
                <users></users>
            </b-col>
            <b-col cols="12" md="8" class="border-left">
                <router-view></router-view>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
    import users from '../../components/users'

    export default {
        name: "index",
        components: {
            users
        }

    }
</script>

<style scoped>

</style>