import { toast } from 'react-toastify';

let common = {
    toast: function(type, text) {
        toast[type](text) ;
    },
}

export default common ;