
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.getGameList = (req) => {
    return axios({
        url: "/admin/get_game_list",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

api.saveEditGame = (req) => {
    return axios({
        url: "/admin/save_edit_game",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.deleteGame = (req) => {
    return axios({
        url: "/admin/delete_game",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
api.getGameRates = (req) => {
    return axios({
        url: "/admin/get_game_rates",
        method:'post',
        type: 'json',
        data: req
    }) ;
}

api.saveGameRates = (req) => {
    return axios({
        url: "/admin/save_game_rates",
        method:'post',
        type: 'json',
        data: req
    }) ;
}
export default api ;