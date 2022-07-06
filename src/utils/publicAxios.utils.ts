import Axios from "axios"

const axios = Axios.create({
    baseURL : import.meta.env.VITE_PUBLIC_API
})

export {axios}