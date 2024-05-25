import axios from 'axios'

export default axios.create({
    baseURL: `http://acai-alb-api-995734628.us-east-1.elb.amazonaws.com` 
})