import axios from 'axios'
import store from '../store'
// import router from '../router'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

instance.interceptors.response.use(response => {
    // console.log(response)
    return response
}, (error) => {
    if(error.response.status === 401) {
        store.dispatch('logout')
        return
    }
    return Promise.reject(error)
})

export default instance