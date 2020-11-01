import axios from 'axios'

export const getArticalByid = async id => {
    return axios.get(`/api/artical?id=${id}`)
}

export const getArticalByUserid = async userid => {
    return axios.get(`/api/artical?userid=${userid}`)
}

export const createArtical = async (userid) => {
    return axios.get(`/api/artical/${userid}`)
}

// export const addArtical = async artical => {
//     return axios.post('/api/artical', artical)
// }

export const updateArtical = async artical => {
    return axios.put('/api/artical', artical)
}

export const deleteArtical = async id => {
    return axios.delete(`/api/artical?id=${id}`)
}