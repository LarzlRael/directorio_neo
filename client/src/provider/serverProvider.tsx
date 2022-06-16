import axios from 'axios'

const baseURL =  'http://localhost:4000/'

export const serverAPI = axios.create({ baseURL })

// set the token if this exists
