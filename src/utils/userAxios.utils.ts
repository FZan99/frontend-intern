import Axios from "axios"

const axios = Axios.create({
    baseURL : import.meta.env.VITE_USER_API
})

export {axios}