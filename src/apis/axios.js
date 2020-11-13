import axios from 'axios'
import store from '../store'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

instance.interceptors.response.use(response => {
    console.log(response)
    return response
}, (error) => {
    // console.log(error.__proto__)
    // console.log(error.name)
    // console.log(error.message)
    if(error.response.status === 401) {
        store.commit('set_user', null)
        store.commit('set_login_status', false)
        store.commit('set_login_modal_show', true)
        return
    }
    return Promise.reject(error)
})

export default instance