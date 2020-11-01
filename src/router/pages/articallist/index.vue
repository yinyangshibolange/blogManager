<template>
    <div>
        <header v-if="userid!==undefined&&userid!==null">
            <b-button type="primary" @click="createArtical(userid)">
                创建文章
            </b-button>
        </header>

        <b-list-group>
            <b-list-group-item v-for="(at, index) in articals" :key="index">
                {{at.title}}
                <b-button @click="toEdit(at.id)">编辑</b-button>
            </b-list-group-item>
        </b-list-group>
    </div>

</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: "index",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                articals: 'articals'
            })
        },
        props: {
            userid: String
        },
        methods: {
            ...mapActions({
                getUserArticals: 'getUserArticals',
                createArtical: 'createArtical'
            }),
            async createArtical(userid) {
                await this.createArtical(userid)
                this.$bvToast.toast('文章创建成功', {
                    title: '创建文章',
                    variant: 'success'
                })
            },
            toEdit(id) {
                this.$router.push(`/artical/editor/${id}`)
            }
        },
        mounted() {
            console.log(this.userid)
            this.$store.commit('setUserid', this.userid)
            this.getUserArticals(this.userid)
        }
    }
</script>

<style scoped>

</style>