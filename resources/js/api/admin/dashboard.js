
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.getDashInfo = (req) => {
    return axios({
        url: "/admin/get_dash_info",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

export default api ;