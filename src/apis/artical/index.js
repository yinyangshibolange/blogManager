import axios from 'axios'

export const getArticalByid = id => {
    return axios.get(`/api/artical?id=${id}`)
}

export const getArticalByUserid = userid => {
    return axios.get(`/api/artical?user=${userid}`)
}

export const getArticalByTag = tag => {
    return axios.get(`/api/artical?tag=${tag}`)
}

export const createArtical = (userid) => {
    return axios.get(`/api/artical/${userid}`)
}


export const updateArtical = artical => {
    return axios.put('/api/artical', artical)
}

export const deleteArtical = async id => {
    return axios.delete(`/api/artical?id=${id}`)
}