import axios from "axios"
const API_URL = 'http://104.199.175.143'

const instance = axios.create({
  baseURL: API_URL,
})



export default instance





