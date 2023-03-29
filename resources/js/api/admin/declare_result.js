
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.getGameData = (req) => {
    return axios({
        url: "/admin/declare/get_game_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.getFilterData = (req) => {
    return axios({
        url: "/admin/declare/get_filter_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.saveData = (req) => {
    return axios({
        url: "/admin/declare/save_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.deleteData = (req) => {
    return axios({
        url: "/admin/declare/delete_data",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

export default api ;