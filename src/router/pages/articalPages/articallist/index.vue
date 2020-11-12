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
                <b-button @click="toEdit(at.id)">编辑内容</b-button>
                <b-button type="danger" @click="deleteArtical(at.id)">删除</b-button>
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
                _getUserArticals: 'getUserArticals',
                _createArtical: 'createArtical',
                _deleteArtical: 'deleteArtical'
            }),
            async createArtical(userid) {
                await this._createArtical(userid)
                this.$bvToast.toast('文章创建成功', {
                    title: '创建文章',
                    variant: 'success'
                })
                this._getUserArticals(this.userid)
            },
            toEdit(id) {
                this.$router.push(`/editor/${id}`)
            },
            async deleteArtical(articalid) {
                await this._deleteArtical(articalid)
                this.$bvToast.toast('文章删除成功', {
                    title: '删除文章',
                    variant: 'success'
                })
                this._getUserArticals(this.userid)
            }
        },
        mounted() {
            console.log(this.userid)
            this.$store.commit('setUserid', this.userid)
            this._getUserArticals(this.userid)
        }
    }
</script>

<style scoped>

</style>