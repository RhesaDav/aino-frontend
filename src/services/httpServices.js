import baseApi from "./baseApi"

const login = (data) => {
    return baseApi.post('/login',data)
}

const register = (data) => {
    return baseApi.post('/register', data)
}

const getUsers = () => {
    return baseApi.get('/')
}

export const httpService = {
    login,
    register,
    getUsers
}