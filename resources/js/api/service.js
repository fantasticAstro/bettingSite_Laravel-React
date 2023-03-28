import axios from 'axios' ;
var laravelToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
axios.interceptors.request.use(
    config => {
        config.headers['csrf-token'] = laravelToken ;
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)
const instance = axios.create({
    baseURL: '/',
    timeout: 10000,
    headers: {'X-CSRF-TOKEN': laravelToken}
});

axios.interceptors.response.use(
    response => {
        return response.data
    },
    function (error) {
      
      return Promise.reject(error)
    }
)


export default axios ;