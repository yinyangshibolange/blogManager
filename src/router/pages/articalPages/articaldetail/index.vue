<template>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
                id="input-group-1"
                label="标题"
                label-for="input-1"
        >
            <b-form-input
                    id="input-1"
                    v-model="_detail_artical.title"
                    required
                    placeholder="请输入标题"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="副标题" label-for="input-2">
            <b-form-input
                    id="input-2"
                    v-model="_detail_artical.subtitle"
                    required
                    placeholder="请输入副标题"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="摘要" label-for="input-3">
            <b-form-textarea
                    id="input-3"
                    v-model="_detail_artical.abstract"
                    placeholder="请输入摘要"
                    rows="3"
                    max-rows="6"
            ></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-4" label="封面图片" label-for="input-4">
            <b-file id="input-4" accept="image/*"  @change="uploadImg($event)" ></b-file>
            <b-img :src="_detail_artical.image" fluid style="max-width: 100%;"></b-img>
<!--            <input id="input-4" type="file" accept="image/*" multiple @change="uploadImg($event)" />-->
<!--            <input type="file" accept="image/*" multiple onchange="uploadImg()">-->
        </b-form-group>
        <b-form-group id="input-group-5" label="标签" label-for="input-5">
            <b-form-tags input-id="tags-basic" v-model="tagnames" class="mb-2"></b-form-tags>
        </b-form-group>


        <b-button type="submit" variant="primary">保存</b-button>
        <b-button type="reset" variant="danger">重置</b-button>
    </b-form>

</template>

<script>
    import {mapActions, mapState } from 'vuex'
    import * as apis from '../../../../apis'
    import {upload} from "../../../../apis";
    export default {
        name: "index",
        data() {
            return {
                artical: {},
            }
        },
        computed: {
            ...mapState({
                _detail_artical: 'detail_artical'
            }),
            tagnames() {
                return this._detail_artical.tags.map(tag => tag.name)
            }
        },
        props: {
            articalid: String
        },
        methods: {
            ...mapActions({
                _saveArticalContent: 'saveArticalContent'
            }),
            async onSubmit(param) {
                let saveParam = {
                    id: this._detail_artical.id,
                }
                if(!param) {
                    saveParam = {
                        ...saveParam,
                        title: this._detail_artical.title,
                        subtitle: this._detail_artical.subtitle,
                        abstract: this._detail_artical.abstract,
                    }
                } else {
                    saveParam = {
                        ...saveParam,
                        ...param
                    }
                }

                const resdata = await apis.updateArtical(saveParam)
                if(resdata.data.success) {
                    this.$bvToast.toast(resdata.data.data, {
                        title: '保存',
                        variant: 'success'
                    })
                }
            },
            onReset() {

            },
            // async getArtical() {
            //     const resdata = await apis.getMyArticals(this.articalid)
            //     this.artical = resdata.data[0]
            //     if(this.artical.image) {
            //         this.imagesrc = this.artical.image
            //     }
            //     const tagsResult = await apis.getArticalTags(this.articalid)
            //     this.tags = tagsResult.data
            // },
            async uploadImg(e) {
                const $filepath = URL.createObjectURL(e.target.files[0])
                this.$store.commit('set_detail_artical_image', $filepath)
                const resdata = await upload(e.target.files[0])
                await this.onSubmit({
                    image: resdata.data.linkurl
                })
            }
        },
        mounted() {
            // this.$store.commit('set_articalid', this.articalid)
            // this.getArtical()
        }
    }
</script>

<style scoped>

</style>