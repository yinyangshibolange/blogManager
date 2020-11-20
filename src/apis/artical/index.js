import axios from '../axios'

export const getMyArticals = (artical) => {
    if(artical !== undefined) {
        return axios.get(`/api/myartical?artical=${artical}`)
    }
    return axios.get('/api/myartical')
}

export const getArticalByid = id => axios.get(`/public/artical?id=${id}`)

// export const getArticalByUserid = userid => axios.get(`/public/artical?user=${userid}`)

export const getArticalByTag = tag => axios.get(`/public/artical?tag=${tag}`)

export const createArtical = (artical) => axios.post(`/api/createartical`, artical)


export const updateArtical = artical => axios.put('/api/myartical', artical)

export const deleteArtical = async id => axios.delete(`/api/myartical?artical=${id}`)