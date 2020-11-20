<template>
    <div>
<!--        <header>-->
<!--            <a @click="createArtical()" class="text-primary">-->
<!--                创建文章-->
<!--            </a>-->
<!--&lt;!&ndash;            <b-button type="primary" >&ndash;&gt;-->
<!--&lt;!&ndash;                &ndash;&gt;-->
<!--&lt;!&ndash;            </b-button>&ndash;&gt;-->
<!--        </header>-->
<!--        <b-list-group>-->
<!--            <b-list-group-item v-for="(at, index) in _articals" :key="index">-->
<!--                {{at.title}}-->
<!--                <b-button @click="toEdit(at.id)">编辑内容</b-button>-->
<!--                <router-link :to="'/lay/artical/detail/'+at.id">编辑</router-link>-->
<!--                <b-button type="danger" @click="deleteArtical(at.id)">删除</b-button>-->
<!--                <a>发布</a>-->
<!--            </b-list-group-item>-->
<!--        </b-list-group>-->
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
                _articals: 'articals',
                _cur_tag: 'cur_tag'
            })
        },
        // props: {
        //     tag: String
        // },
        methods: {
            ...mapActions({
                _getMyArticals: 'getMyArticals',
                _createArtical: 'createArtical',
                _deleteArtical: 'deleteArtical'
            }),
            async createArtical() {
                const resdata = await this._createArtical({
                    tag: this._cur_tag && this._cur_tag.id
                })
                if(resdata) {
                    this.$bvToast.toast('文章创建成功', {
                        title: '创建文章',
                        variant: 'success'
                    })
                    await this.initList()
                }
            },
            toEdit(id) {
                this.$router.push(`/lay/editor/${id}`)
            },
            async deleteArtical(articalid) {
                const resdata = await this._deleteArtical(articalid)
                if(resdata) {
                    this.$bvToast.toast('文章删除成功', {
                        title: '删除文章',
                        variant: 'success'
                    })
                    await this.initList()
                }
            },
            async initList() {
                // this.$store.commit('set_tag', null)
                await this._getMyArticals()
            }
        },
        mounted() {
            this.initList()
        }
    }
</script>

<style scoped>

</style>