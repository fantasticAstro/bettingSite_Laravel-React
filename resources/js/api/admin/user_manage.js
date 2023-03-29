
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.getUserData = (req) => {
    return axios({
        url: "/admin/user/get_user_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.addUserData = (req) => {
    return axios({
        url: "/admin/user/add_user_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

export default api ;