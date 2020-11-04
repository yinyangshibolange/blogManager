import axios from 'axios'

export const getArticalByid = async id => {
    return axios.get(`/api/artical?id=${id}`)
}

export const getArticalByUserid = async userid => {
    return axios.get(`/api/artical?user=${userid}`)
}

export const getArticalByTag = async tag => {
    return axios.get(`/api/artical?tag=${tag}`)
}

export const createArtical = async (userid) => {
    return axios.get(`/api/artical/${userid}`)
}


export const updateArtical = async artical => {
    return axios.put('/api/artical', artical)
}

export const deleteArtical = async id => {
    return axios.delete(`/api/artical?id=${id}`)
}