import Vuex from 'vuex'
import Vue from 'vue'
import * as apis from '../apis'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        artical_cur_userid: null,
        cur_articalid: null,
        users: [],
        articals: []
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
            commit('setArticalid', resdata.data)
            return resdata.data
        },
        async getUserArticals({commit}, userid) {
            const resdata = await apis.getArticalByUserid(userid)
            console.log(resdata.data)
            commit('set_user_articals', resdata.data)
            return resdata.data
        }
    }
})

export default store