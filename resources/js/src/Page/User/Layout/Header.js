
import CButton from '../../../Component/CButton';
import SearchBar from '../../../Component/SearchBar';
import SignModal from '../../../Component/SignModal';
import { useState, useEffect } from 'react';
import * as actionTypes from '../../../../store/actions' ;
import api from '../../../../api/user/auth' ;
import Common from '../../../Utils/Common';
import {useSelector, useDispatch} from 'react-redux' ;

function Header(props) {

    const [open_modal, setOpenModal] = useState(false) ;
    const [modal_title, setModalTitle] = useState('') ;
    const redux_user_auth = useSelector(state => state.user_auth) ;
    const [now_time, setNowTime] = useState('') ;
    const dispatch = useDispatch() ;

    const openModal = (title) => {
        let _open_modal = open_modal
        setOpenModal(!_open_modal) ; 
        setModalTitle(title) ;
        
    }

    useEffect(() => {
        api.check_login_state().then(result =>{
            if(result.status=="200") {
                dispatch({state:result.user_info, type: actionTypes.USER_AUTH}) ;
            } else {
                dispatch({state:false, type: actionTypes.USER_AUTH}) ;
            }
        }) ;
        calNowTime() ;
    }, 1);
    
    const SignOut = () => {
        try {
            api.signOut().then(result =>{
                Common.toast("success", "Logout Successfully") ;
                dispatch({state:false, type: actionTypes.USER_AUTH}) ;
            }) ;    
        }catch(e) {
            Common.toast("error", "Logout Failed") ;
        }
    }
    
    const calNowTime = () => {
        setTimeout(function() {
            let one_format_date = Date() ;
            let now_date_arr = one_format_date.split("(") ;
            let _now_date = now_date_arr[0] ;
            _now_date.replace("GMT+", "") ;
            setNowTime(_now_date) ;
            calNowTime() ;
        }, 1000) ;
    }

    return (
        <div className='page-header'>
            <div className='desktop-header'>
                <a className='header-mark' href={`/`}>
                    <img src="/images/mark.png" />
                </a>
                <div className='now-time'>
                    {now_time}
                </div>
                <SearchBar />
                {
                    redux_user_auth ?
                    <div className='sign-field'>
                        <CButton
                            text='DEMO'
                            background='#F5E04D'
                            color='black'
                            fontSize='12px'
                        />
                        <CButton
                            text='WITH'
                            background='white'
                            color='black'
                            marginLeft='5px'
                            fontSize='12px'
                            marginRight='10px'
                        />
                        <span >
                            <i 
                                onClick={SignOut}
                                className='fa fa-sign-out' 
                                style={{
                                    color: 'white', 
                                    fontSize: '40px', 
                                    verticalAlign: 'middle',
                                    cursor: 'pointer'
                                }}>
                            </i>    
                        </span>
                    </div>
                    :
                    <div className='sign-field'>
                        <CButton
                            text='Log In'
                            background='#F5E04D'
                            color='black'
                            fontSize='12px'
                            callback={() => openModal('Login')}
                        />
                        <CButton
                            text='Sign Up'
                            background='white'
                            color='black'
                            marginLeft='5px'
                            fontSize='12px'
                            callback={() => openModal('SignUp')}
                            marginRight='10px'
                        />
                        
                    </div>
                }
            </div>
            <SignModal 
                title={modal_title}
                open_modal = {open_modal}
                close_modal = {openModal}
            />
        </div>
    );
}

export default Header ;