<template>
    <div class="p-3" v-if="_editor_artical">
        <h3>{{_editor_artical.title}}</h3>
        <mavon-editor v-model="_editor_artical.content" @save="saveContent" @change="contentChange"/>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import debounce from 'lodash/debounce'
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
              _getArtical: 'getArtical',
              _saveArticalContent: 'saveArticalContent'
          }),
          async  saveContent() {
            await this._saveArticalContent(this._editor_artical)
              this.$bvToast.toast('保存成功', {
                  title: '保存文章内容',
                  variant: 'success'
              })
            },
            // contentChange: debounce(this.timeoutSave, 200),
            timeoutSave() {
              if(this.timer) {
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
            if(this.timer) {
                clearTimeout(this.timer)
                this.timer = null
            }
            this.$store.commit('set_artical', null)
        },
        mounted() {
            this.contentChange = debounce(this.timeoutSave, 200)
            this._getArtical(this.articalid)
        }
    }
</script>

<style scoped>

</style>