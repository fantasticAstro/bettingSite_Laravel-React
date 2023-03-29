
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.signUp = (req) => {
    return axios({
        url: "/sign_up",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
export default api ;