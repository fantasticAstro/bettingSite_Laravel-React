import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import '../../../../css/admin/scss/style.scss';
import api from '../../../api/admin/auth' ;
import common from '../../Utils/Common';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions'
function Login()  {

    const [login_form, setLoginForm] = useState({username:'', password:''}) ;
    const dispatch = useDispatch() ;

    const logIn = () => {
        try {
            api.logIn(login_form).then(result => {
                if(result.status == "200") {
                    dispatch({state: result.user_info, type: actionTypes.USER_AUTH})
                    window.location.href = "/admin" ;
                } else {
                    common.toast("error", result.message) ;
                }   
            }) ;
        }catch(e) { 
            common.toast("error", "Login Failed") ;
        }          
    }
    const validateAddUserForm = (e) => {
      
        if(e == null) {
            return ;
        }
        try{
            const nextFormState = {
                ...login_form,
                [e.target.name]: e.target.value,
            };
            
            setLoginForm(nextFormState) ;
        }catch(e) {
            console.log(e) ;
        }
    }
    return(            
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="auth-bg">
                    <span className="r"/>
                    <span className="r s"/>
                    <span className="r s"/>
                    <span className="r"/>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"/>
                        </div>
                        <h3 className="mb-4">Admin Login</h3>
                        <div className="input-group mb-3">
                            <input type="email" 
                            value={login_form.username}
                            className="form-control" 
                            placeholder="Username" 
                            name='username'
                            onChange={(event)=>validateAddUserForm(event)}/>
                        </div>
                        <div className="input-group mb-4">
                            <input 
                            type="password" 
                            className="form-control" 
                            laceholder="password"
                            name='password'
                            onChange={(event)=>validateAddUserForm(event)}/>
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                            </div>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4" onClick={logIn}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;