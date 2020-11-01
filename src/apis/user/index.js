import axios from 'axios'

export const addUser = async (user) => {
    return await axios.post('/api/user', user)
}

export const getUser = async (id) => {
    return await axios.get(`/api/user?id=${id}`)
}

export const updateUser = async (user) => {
    return await axios.put('/api/user', user)
}