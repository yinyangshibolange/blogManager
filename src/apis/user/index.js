import axios from '../axios'

export const register = (user) => axios.post('/login/register', user)

export const getUser = (id) => axios.get(`/api/user?id=${id}`)

export const getLoginUser = () => axios.get(`/api/getUser`)

export const updateUser = (user) => axios.put('/api/user', user)