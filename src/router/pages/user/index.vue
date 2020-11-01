<template>
    <b-container fluid>
        <b-row>
            <b-col v-for="(user, index) in users" :key="index" cols="6" sm="4" md="3">
                <user
                        imagesrc="https://img.wenhairu.com/images/2020/10/31/JFaro.jpg"
                        :username="user.name"></user>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import user from '../../components/user'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        computed: {
            ...mapState({
                users: 'users'
            })
        },
        components: {
            user
        },
        methods: {
            ...mapActions({
                inituser: 'userInit'
            })
        },
        mounted() {
            this.inituser()
        }
    }
</script>

<style scoped>

</style>