
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;

api.getTransData = (req) => {
    return axios({
        url: "/admin/get_trans_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

export default api ;