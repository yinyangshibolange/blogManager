<template>
    <b-container fluid>
        <div>
            热门标签
            <a v-for="(tag, index) in hotTags" :key="index" class="tag" @click="fetchArticals(tag.id)">
                {{tag.name}}
            </a>
        </div>
        <div>
            所有标签
            <a v-for="(tag, index) in allTags" :key="index" class="tag" @click="fetchArticals(tag.id)">
                {{tag.name}}
            </a>
        </div>
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
            }
        },
        methods: {
            ...mapActions({
                _getArticalsByTag: 'getArticalsByTag'
            }),
            async getHotTags() {
                const hotTags = await apis.getHotTags(10)
                console.log(hotTags)
                this.hotTags = hotTags
            },
            async getAllTags() {
                const allTags = await apis.getAllTags()
                console.log(allTags)
                this.allTags = allTags
            },
            async fetchArticals(tagid) {
                const resdata = await this._getArticalsByTag(tagid)
                console.log(resdata)
            }
        },
        mounted() {
            this.getHotTags()
            this.getAllTags()
        }
    }
</script>

<style scoped>

</style>