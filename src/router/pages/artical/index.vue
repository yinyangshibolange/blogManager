<template>
    <b-container fluid class="artical-view">
        <b-row>
            <b-col cols="0" md="3">
                <div>
                    <tags></tags>
                </div>
                <header>
                    <a @click="createArtical()" class="text-primary">
                        创建文章
                    </a>
                    <!--            <b-button type="primary" >-->
                    <!--                -->
                    <!--            </b-button>-->
                </header>
                <b-list-group>
                    <b-list-group-item
                            v-for="(at, index) in _articals"
                            :key="index"
                            @click.self="toEdit(at.id)"
                            button
                            :active="_cur_articalid == at.id"
                            active-class="list-active">
                        {{at.title}}
<!--                        <b-button @click="toEdit(at.id)">编辑内容</b-button>-->
                        <a @click.self="toDetail(at.id)" class="text-primary">编辑</a>
<!--                        <router-link :to="'/lay/artical/detail/'+at.id">编辑</router-link>-->
                        <a  @click.self="deleteArtical(at.id)" class="text-danger">删除</a>
<!--                        <b-button type="danger" @click="deleteArtical(at.id)" class="text-danger">删除</b-button>-->
                        <a>发布</a>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col cols="12" md="9" class="border-left p-4">
                <router-view></router-view>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
    import tags from '../../components/tags'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "index",
        components: {
            tags
        },
        computed: {
            ...mapState({
                _articals: 'articals',
                _cur_tag: 'cur_tag',
                _cur_articalid: 'cur_articalid'
            })
        },
        methods: {
            ...mapActions({
                _getEditorArtical: 'getEditorArtical',
                _getDetailArtical: 'getDetailArtical',
                _getMyArticals: 'getMyArticals',
                _createArtical: 'createArtical',
                _deleteArtical: 'deleteArtical'
            }),
            async createArtical() {
                const resdata = await this._createArtical({
                    tag: this._cur_tag && this._cur_tag.id
                })
                console.log('resdata', resdata)
                if(resdata !== undefined && resdata !== null) {
                    this.$bvToast.toast('文章创建成功', {
                        title: '创建文章',
                        variant: 'success'
                    })
                    await this.initList()
                    await this._getEditorArtical(resdata)
                    if(!/^\/lay\/artical\/editor.*/.test(this.$router.currentRoute.path)) {
                        this.$router.push(`/lay/artical/editor/${resdata}`)
                    }
                }
            },
            async toEdit(id) {
                this.$store.commit('set_articalid', id)
                const artical = await this._getEditorArtical(id)
                if(artical) {
                    this.$router.push(`/lay/artical/editor/${id}`)
                }
            },
            async toDetail(id) {
                this.$store.commit('set_articalid', id)
                const artical = await this._getDetailArtical(id)
                if(artical) {
                    this.$router.push(`/lay/artical/detail/${id}`)
                }
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
    .artical-view.container-fluid,
    .artical-view.container-fluid .row {
        height: 100%;
    }
    .list-active {
        background: #999999;
    }
</style>