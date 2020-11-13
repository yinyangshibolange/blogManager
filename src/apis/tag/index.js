import axios from '../axios'

export const getHotTags = (hotn) => axios.get(`/public/hottag?hotn=${hotn}`)

export const getAllTags = () => axios.get('/public/tagcloud')

export const getMyTags = () => axios.get('/api/mytags')

export const searchTag = (tagName) => axios.get(`/public/searchtag?keyword=${tagName}`)

// 这里是创建并且添加标签
export const createTag = (artical, name) => axios.post('/api/tagcloud', {artical, name})

export const getArticalTags = (artical) => axios.get(`/public/tag?artical=${artical}`)

// 这里是添加已存在的标签
export const addArticalTag = (artical, tag) => axios.post('/api/tag', {
    artical,
    tag,
})

export const deleteTag = (artical, tag) => axios.delete(`/api/tag?artical=${artical}&tag=${tag}`)

