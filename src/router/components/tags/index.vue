<template>
    <b-container fluid >
        <div>
            标签
            <a v-for="(tag, index) in myTags" :key="index" class="tag"
               :class="{'active': _cur_tag && _cur_tag.id === tag.id}"
               @click="fetchArticals(tag)">
                {{tag.name}}
            </a>
        </div>
<!--        <div>-->
<!--            所有标签-->
<!--            <a v-for="(tag, index) in allTags" :key="index" class="tag" @click="fetchArticals(tag.id)">-->
<!--                {{tag.name}}-->
<!--            </a>-->
<!--        </div>-->
    </b-container>
</template>

<script>
    import * as apis from '../../../apis'
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "index",
        data() {
            return {
                hotTags: [],
                allTags: [],
                myTags: []
            }
        },
        computed: {
          ...mapState({
              _cur_tag: 'cur_tag'
          })
        },
        methods: {
            ...mapActions({
                _getMyArticals: 'getMyArticals'
            }),
            async getMyTags() {
                const { data } = await apis.getMyTags()
                this.myTags = data
            },
            // async getHotTags() {
            //     const { data } = await apis.getHotTags(10)
            //     console.log(data)
            //     this.hotTags = data
            // },
            // async getAllTags() {
            //     const { data } = await apis.getAllTags()
            //     console.log(data)
            //     this.allTags = data
            // },
            async fetchArticals(tag) {
                this.$store.commit('set_tag', tag)
                 await this._getMyArticals({
                     tag: tag.id
                 })
                if(this.$router.currentRoute.path !== '/lay/artical/list') {
                    this.$router.push('/lay/artical/list')
                }
            }
        },
        mounted() {
            this.getMyTags()
            // this.getHotTags()
            // this.getAllTags()
        }
    }
</script>

<style scoped>
    .tag {
        background: #ccc;
        color: #fff;
        margin-left: 10px;
        padding: 3px 6px;
        margin-top: 13px;
        display: inline-block;
        border-radius: 5px;
    }
    .tag.active {
        background: #2582ff;
    }
</style>