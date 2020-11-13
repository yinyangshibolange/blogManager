import Vuex from 'vuex'
import Vue from 'vue'
import * as apis from '../apis'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login_modal_show: false,
        login_status: false,
        user: null,
        artical_cur_userid: null,
        cur_articalid: null,
        users: [],
        articals: [],
        editor_artical: null,
    },
    mutations: {
        userInit(state, users) {
            state.users = users
        },
        articalsInit(state, articals) {
            state.articals = articals
        },
        setUserid(state, userid) {
            state.artical_cur_userid = userid
        },
        setArticalid(state, articalid) {
            state.cur_articalid = articalid
        },
        set_user_articals(state, articals) {
            state.articals = articals
        },
        set_artical(state, artical) {
            state.editor_artical = artical
        },
        set_login_status(state, status) {
            state.login_status = status
        },
        set_login_modal_show(state, login_modal_show) {
            state.login_modal_show = login_modal_show
        },
        set_user(state, user) {
            state.user = user
        }
    },
    actions: {
        async userInit({commit}) {
            const resdata = await apis.getUser()
            commit('userInit', resdata.data)
            return resdata.data
        },
        async createArtical({commit}, userid) {
            const resdata = await apis.createArtical(userid)
            console.log(resdata)
            commit('setArticalid', resdata.data)
            return resdata.data
        },
        async getArtical({commit}, articalid) {
            const resdata = await apis.getArticalByid(articalid)
            console.log(resdata.data[0].content)
            commit('set_artical', resdata.data[0])
            return resdata.data[0]
        },
        async getArticalsByTag({commit}, tag) {
            const resdata = await apis.getArticalByTag(tag)
            console.log(resdata.data)
            commit('set_user_articals', resdata.data)
            return resdata.data
        },
        async getUserArticals({commit}, userid) {
            const resdata = await apis.getArticalByUserid(userid)
            console.log(resdata.data)
            commit('set_user_articals', resdata.data)
            return resdata.data
        },
        async deleteArtical(context, articalid) {
            const resdata = await apis.deleteArtical(articalid)
            return resdata.data
        },
        async saveArticalContent(context, artical) {
            const resdata = await apis.updateArtical({content: artical.content, id: artical.id})
            return resdata.data
        },
        async afterLogin({commit}) {
            const resdata = await apis.getLoginUser()
            console.log(resdata.data)
            commit('set_user', resdata.data)
            commit('set_login_status', true)
            commit('set_login_modal_show', false)
            return resdata.data
        },
    }
})

export default store