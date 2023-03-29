
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;

api.editPoint = (req) => {
    return axios({
        url: "/admin/user_profile/edit_point",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.getUserInfo = (req) => {
    return axios({
        url: "/admin/user_profile/get_user_info",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
export default api ;