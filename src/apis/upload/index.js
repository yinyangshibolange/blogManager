import axios from 'axios'

export const upload = (file) => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('Token', '537101f713559b9c881dde0db9e687afcc0d1eba:PZQhySmM4Z-1HNfRIUQa6pOnmyU=:eyJkZWFkbGluZSI6MTYwNDMxOTE2NiwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzI5MTYzIiwiYWlkIjoiMTcyNzUxMCIsImZyb20iOiJ3ZWIifQ==');
    return axios.post('/upload', formData, {
        headers: {
            id: 1727510,
            deadline: Date.now(),
            from: 'web',
            'Content-Type': 'multipart/form-data'
        }
    })
}