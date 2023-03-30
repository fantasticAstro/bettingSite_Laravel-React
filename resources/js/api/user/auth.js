
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
api.logIn = (req) => {
    return axios({
        url: "/login",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.check_login_state = (req) => {
    return axios({
        url: "/check_login_state",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.signOut = (req) => {
    return axios({
        url: "/sign_out",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
export default api ;