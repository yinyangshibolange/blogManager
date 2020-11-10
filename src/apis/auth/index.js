import axios from 'axios'

export const reg = (user) => {
    return axios.post('/xauth/reg', user)
}

export const login = (user) => {
    return axios.post('/xauth/login', user)
}

export const logout = () => {
    return axios.get('/xauth/logout')
}

