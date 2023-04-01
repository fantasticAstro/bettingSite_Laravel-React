import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.logIn = (req) => {
    return axios({
        url: "/admin/log_in",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

export default api ;