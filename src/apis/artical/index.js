import axios from '../axios'

export const getMyArticals = () => axios.get('/api/myartical')

export const getArticalByid = id => axios.get(`/public/artical?id=${id}`)

export const getArticalByUserid = userid => axios.get(`/public/artical?user=${userid}`)

export const getArticalByTag = tag => axios.get(`/public/artical?tag=${tag}`)

export const createArtical = (userid) => axios.get(`/api/artical/${userid}`)


export const updateArtical = artical => axios.put('/api/artical', artical)

export const deleteArtical = async id => axios.delete(`/api/artical?id=${id}`)