import axios from 'axios'
import { config } from 'dotenv'

config()

export default axios.create({
    baseURL: process.env.API_HOST
})