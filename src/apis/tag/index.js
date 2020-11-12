import axios from 'axios'

export const getHotTags = (hotn) => axios.get(`/api/hottag?hotn=${hotn}`)

export const getAllTags = () => axios.get('/api/tagcloud')

export const searchTag = (tagName) => axios.get(`/api/searchtag?keyword=${tagName}`)

// 这里是创建并且添加标签
export const createTag = (artical, name) => axios.post('/api/tagcloud', {artical, name})

export const getArticalTags = (artical) => axios.get(`/api/tag?artical=${artical}`)

// 这里是添加已存在的标签
export const addArticalTag = (artical, tag) => axios.post('/api/tag', {
    artical,
    tag,
})

export const deleteTag = (artical, tag) => axios.delete(`/api/tag?artical=${artical}&tag=${tag}`)

