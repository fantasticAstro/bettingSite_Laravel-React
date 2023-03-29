
import Config from '../config' ;
import axios from './service' ;
let api = {} ;

api.get_liver_result = (req) => {
    return axios({
        url: "/test",
        method:'post',
        type: 'json',
        data: req
    })
}
api.get_market_list = (req) => {
    return axios({
        url: "/get_market_list",
        method:'post',
        type: 'json',
        data: req
    })
}
api.get_bet_info = (req) => {
    return axios({
        url: "/get_bet_info",
        method:'post',
        type: 'json',
        data: req
    })
}
api.save_bet = (req) => {
    return axios({
        url: "/save_bet",
        method:'post',
        type: 'json',
        data: req
    })
}

export default api ;