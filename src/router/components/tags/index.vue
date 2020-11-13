<template>
    <b-container fluid>
        <div>
            标签
            <a v-for="(tag, index) in myTags" :key="index" class="tag" @click="fetchArticals(tag.id)">
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
    import { mapActions } from 'vuex'
    export default {
        name: "index",
        data() {
            return {
                hotTags: [],
                allTags: [],
                myTags: []
            }
        },
        methods: {
            ...mapActions({
                _getArticalsByTag: 'getArticalsByTag'
            }),
            async getMyTags() {
                const { data } = await apis.getMyTags()
                console.log(data)
                this.myTags = data
            },
            async getHotTags() {
                const { data } = await apis.getHotTags(10)
                console.log(data)
                this.hotTags = data
            },
            async getAllTags() {
                const { data } = await apis.getAllTags()
                console.log(data)
                this.allTags = data
            },
            async fetchArticals(tagid) {
                const resdata = await this._getArticalsByTag(tagid)
                console.log(resdata)
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

</style>