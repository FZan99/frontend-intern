import Axios from "axios"

const axios = Axios.create({
    baseURL : import.meta.env.VITE_ADMIN_API
})

export {axios}