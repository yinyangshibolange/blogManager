import axios from 'axios'

export const register = (user) => axios.post('/login/register', user)

export const getUser = (id) => axios.get(`/api/user?id=${id}`)

export const updateUser = (user) => axios.put('/api/user', user)