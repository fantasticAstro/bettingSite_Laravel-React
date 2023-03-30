
import CButton from '../../../Component/CButton';
import SearchBar from '../../../Component/SearchBar';
import SignModal from '../../../Component/SignModal';
import { useState } from 'react';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import * as actionTypes from '../../../../store/actions' ;
import api from '../../../../api/user/auth' ;
import Common from '../../../Utils/Common';

function Header(props) {

    const [open_modal, setOpenModal] = useState(false) ;
    const [modal_title, setModalTitle] = useState('') ;

    const openModal = (title) => {
        let _open_modal = open_modal
        setOpenModal(!_open_modal) ; 
        setModalTitle(title) ;
    }
    
    useEffect(() => {
        api.check_login_state().then(result =>{
            if(result.status=="200") {
                props.userAuth(true) ;
            } else {
                props.userAuth(false) ;
            }
        }) ;
    }, 1);
    
    const SignOut = () => {
        try {
            api.signOut().then(result =>{
                Common.toast("success", "Logout Successfully") ;
                props.userAuth(false) ;
            }) ;    
        }catch(e) {
            Common.toast("error", "Logout Failed") ;
        }
    }
    return (
        <div className='page-header'>
            <div className='desktop-header'>
                <a className='header-mark' href={`/`}>
                    <img src="/images/mark.png" />
                </a>
                <div className='now-time'>
                    Mar
                </div>
                <SearchBar />
                {
                    props.user_auth ?
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
const mapStateToProps = state => {
    return {
        user_auth: state.user_auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        userAuth: (state) => dispatch({type: actionTypes.USER_AUTH, state:state}),  
    }
};
export default connect(mapStateToProps, mapDispatchToProps) (Header);