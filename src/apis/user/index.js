import axios from 'axios'

export const register = (user) => {
    return axios.post('/auth/register', user)
}

export const getUser = (id) => {
    return axios.get(`/api/user?id=${id}`)
}

export const updateUser = (user) => {
    return axios.put('/api/user', user)
}