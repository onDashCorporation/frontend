import axios from 'axios'

export default axios.create({
    baseURL: 'http://acai-lb-1295613342.us-east-1.elb.amazonaws.com'
})