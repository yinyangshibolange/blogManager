import axios from '../axios'

export const upload = (file) => {
    const fileTypeToken = '537101f713559b9c881dde0db9e687afcc0d1eba:g3nCM4jNX6wkD4hDpWQApNH6CfY=:eyJkZWFkbGluZSI6MTYwNDM3MjM4MSwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzI5MTYzIiwiYWlkIjoiMTcyNzUxMCIsImZyb20iOiJmaWxlIn0='
    const formData = new FormData()
    formData.append('file', file)
    formData.append('Token', fileTypeToken);
    return axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}