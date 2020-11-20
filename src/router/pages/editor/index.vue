<template>
    <div class="p-3" v-if="_editor_artical">
<!--        <h3>{{_editor_artical.title}}</h3>-->
        <mavon-editor ref="mavon" v-model="_editor_artical.content" @imgAdd="uploadimg" @save="saveContent"
                      @change="contentChange"/>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import debounce from 'lodash/debounce'
    import {upload} from '../../../apis/upload'

    export default {
        name: "index",
        data() {
            return {
                timer: null,

            }
        },
        computed: {
            ...mapState({
                _editor_artical: 'editor_artical'
            })
        },
        methods: {
            ...mapActions({
                // _getArtical: 'getArtical',
                _saveArticalContent: 'saveArticalContent'
            }),
            // debounce,
            async uploadimg(pos, $file) {
                const resdata = await upload($file)
                this.$refs.mavon.$img2Url(pos, resdata.data.linkurl)
            },
            async saveContent() {
                await this._saveArticalContent(this._editor_artical)
                this.$bvToast.toast('保存成功', {
                    title: '保存文章内容',
                    variant: 'success'
                })
            },
            // contentChange: debounce(this.timeoutSave, 200),
            timeoutSave() {
                console.log('timeoutSave')
                if (this.timer) {
                    clearTimeout(this.timer)
                    this.timer = null
                }
                this.timer = setTimeout(() => {
                    this.saveContent()
                    clearTimeout(this.timer)
                    this.timer = null
                }, 2000)
            }
        },
        props: {
            articalid: String
        },
        beforeDestroy() {
            if (this.timer) {
                clearTimeout(this.timer)
                this.timer = null
            }
            this.contentChange = undefined
            this.$store.commit('set_editor_artical', null)
        },
        created() {
            this.contentChange = debounce(this.timeoutSave, 200)
        }
    }
</script>

<style scoped>

</style>