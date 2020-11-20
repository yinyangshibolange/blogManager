import Vuex from 'vuex'
import Vue from 'vue'
import * as apis from '../apis'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
        articals: [],
        cur_articalid: null,
        editor_artical: null,
        detail_artical: null,
        cur_tag: null,
    },
    mutations: {
        set_articalid(state, articalid) {
            state.cur_articalid = articalid
        },
        set_articals(state, articals) {
            state.articals = articals
        },
        set_editor_artical(state, artical) {
            state.editor_artical = artical
        },
        set_detail_artical(state, artical) {
            state.detail_artical = artical
        },
        set_detail_artical_image(state, image) {
            if(state.detail_artical) {
                state.detail_artical.image = image
            }
        },
        set_user(state, user) {
            state.user = user
        },
        set_tag(state, tag) {
            state.cur_tag = tag
        },
    },
    actions: {
        /**
         * 获取我的的文章,
         * @param commit
         * @param userid
         * @returns {Promise<any>}
         */
        async getMyArticals({commit}, param = {}) {
            const {tag} = param
            if(tag) {
                const resdata = await apis.getArticalByTag(tag)
                commit('set_articals', resdata.data)
                return resdata.data
            } else {
                const resdata = await apis.getMyArticals()
                if(resdata) {
                    commit('set_articals', resdata.data)
                    return resdata.data
                }
            }

        },
        /**
         * 创建文章,初始化文章
         * @param commit
         * @param userid
         * @returns {Promise<any>}
         */
        async createArtical({commit}, artical) {
            const resdata = await apis.createArtical(artical)
            console.log('createArtical resdata.data', resdata.data)
            commit('set_articalid', resdata.data)
            return resdata.data
        },
        /**
         * 获取单个文章,获取编辑器文章
         * @param commit
         * @param articalid
         * @returns {Promise<*>}
         */
        async getEditorArtical({commit}, articalid) {
            const resdata = await apis.getMyArticals(articalid)
            commit('set_editor_artical', resdata.data[0])
            return resdata.data[0]
        },
        /**
         * 获取文章详细
         * @param commit
         * @param articalid
         * @returns {Promise<*>}
         */
        async getDetailArtical({commit}, articalid) {
            const resdata = await apis.getMyArticals(articalid)
            const artical = resdata.data[0]
            const tagsResult = await apis.getArticalTags(articalid)
            artical.tags = tagsResult.data
            commit('set_detail_artical', artical)
            return artical
        },
        /**
         * 删除某个文章
         * @param context
         * @param articalid
         * @returns {Promise<any>}
         */
        async deleteArtical(context, articalid) {
            const resdata = await apis.deleteArtical(articalid)
            return resdata.data
        },
        /**
         * 保存用户内容,用于编辑器
         * @param context
         * @param artical
         * @returns {Promise<any>}
         */
        async saveArticalContent(context, artical) {
            const resdata = await apis.updateArtical({content: artical.content, id: artical.id})
            return resdata.data
        },
        /**
         * 获取登录的用户信息
         * @param commit
         * @returns {Promise<any>}
         */
        async getUser({commit}) {
            const loginUser = await apis.getLoginUser()
            if(loginUser) {
                commit('set_user', loginUser.data)
                return loginUser.data
            }
        },
        /**
         * 登录 
         * @param dispatch
         * @param user
         * @returns {Promise<never>}
         */
        async login({dispatch}, user) {
            const loginResult = await apis.login(user)
            if(loginResult.data.success === true) {
                await dispatch('getUser')
                router.push('/lay/public')
            } else {
                return Promise.reject(loginResult.data.data)
            }
        },
        /**
         * 登出
         * @param commit
         * @returns {Promise<any>}
         */
        async logout({commit}) {
            const resdata = await apis.logout()
            commit('set_user', null)
            if(router.currentRoute.path !== '/auth') {
                router.push('/auth')
            }
            return resdata.data
        }
    }
})

export default store