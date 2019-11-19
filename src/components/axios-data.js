import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://formularz-6951a.firebaseio.com/'
})

export default instance
