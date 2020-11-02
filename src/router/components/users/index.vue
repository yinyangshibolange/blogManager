<template>
    <div>
        <div v-for="(user, index) in users" :key="index">
            <user
                    :isactive="cur_userid==user.id"
                    imagesrc="https://img.wenhairu.com/images/2020/11/02/JY5h6.jpg"
                    :username="user.name"
                    @itemClick="userChoose(user.id)"></user>
        </div>
    </div>
</template>

<script>
    import user from '../../components/user'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        computed: {
            ...mapState({
                users: 'users',
                cur_userid: 'artical_cur_userid'
            })
        },
        components: {
            user
        },
        methods: {
            ...mapActions({
                inituser: 'userInit'
            }),
            userChoose(userid) {
                this.$store.commit('setUserid', userid)
                this.$router.push(`/artical/list/${userid}`)
            }
        },
        mounted() {
            this.inituser()
        }
    }
</script>

<style scoped>

</style>