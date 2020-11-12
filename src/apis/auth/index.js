import axios from 'axios'

export const reg = (user) => axios.post('/xauth/reg', user)

export const login = (user) => axios.post('/xauth/login', user)

export const logout = () => axios.get('/xauth/logout')

