import CModal from './CModal';
import { useState, useEffect } from 'react';
import api from  '../../api/user/auth' ;
import Common from '../Utils/Common';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import * as actionTypes from '../../store/actions' ;
import {connect} from 'react-redux';

function SignModal(props) {

    const [login_form, setLoginForm] = useState({username:'', password:''}) ;
    const [sign_form, setSignForm] = useState({username:'', password:'', email:'', full_name:'', password_confirm:'', mobile:''}) ;
    const [close_modal, setCloseModal] = useState(false) ;
    const [open_modal, setOpenModal] = useState(false) ;
    
    useEffect(() => {
        
    }, 1);
    
    const logIn = () => {
        try {
            api.logIn(login_form).then(result => {
                if(result.status == "200") {
                    Common.toast("success", result.message) ;
                    props.userAuth(result.user_info) ;
                    props.close_modal('') ;
                } else {
                    Common.toast("error", result.message) ;
                }
            }) ;
        }catch(e) {
            console.log(e) ;
            Common.toast("error", "Login Failed") ;
        }
    }
    const signUp = () => {
        try {
            api.signUp(sign_form).then(result => {
                if(result.status =="200") {
                    Common.toast("sucess", result.message) ;
                } else {
                    Common.toast("error", result.message) ;
                }
            }) ;
        }catch(e) {
            Common.toast("sucess", result.message) ;
        }
    }

    const validateSignUpForm = (e) => {
        const nextFormState = {
            ...sign_form,
            [e.target.name]: e.target.value,
        };
        
        setSignForm(nextFormState) ;
    }
    const validateLoginForm = (e) => {
        const nextFormState = {
            ...login_form,
            [e.target.name]: e.target.value,
        };
        
        setLoginForm(nextFormState) ;
    }
    const openModal = () => {
        let _open_modal = open_modal ;
        setOpenModal(!_open_modal) ;
    }
    return (
        <CModal
                open_modal={props.open_modal}
                close_modal={props.close_modal}
                width='500px'
                title={props.title}
            >
                {
                    props.title == "Login"?
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" 
                                name='username'
                                onChange={(event)=>validateLoginForm(event)}
                                value = {login_form.username}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name='password'
                                onChange={(event)=>validateLoginForm(event)}
                                value = {login_form.password}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <div align='right'>
                                <Button variant='success' style={{width: '100%'}} onClick={logIn}>Login</Button>
                            </div>
                        </Form.Group>
                    </Form>
                    :
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-user'></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Full Name"
                                aria-describedby="basic-addon1"
                                name='full_name'
                                onChange={(event)=>validateSignUpForm(event)}
                                value = {sign_form.full_name}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-user'></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-describedby="basic-addon1"
                                name='username'
                                onChange={(event)=>validateSignUpForm(event)}
                                value = {sign_form.username}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-envelope'></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Email"
                                aria-describedby="basic-addon1"
                                name='email'
                                type='email'
                                onChange={(event)=>validateSignUpForm(event)}
                                value = {sign_form.email}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-phone'></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Mobile Phone"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type='number'
                                name='mobile'
                                onChange={(event)=>validateSignUpForm(event)}
                                value = {sign_form.mobile}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-key'></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type='password'
                                name='password'
                                onChange={(event)=>validateSignUpForm(event)}
                                value = {sign_form.password}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className='fa fa-key'></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Confirm Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type='password'
                                name='password_confirm'
                                onChange={(event)=>validateSignUpForm(event)}
                                value = {sign_form.password_confirm}
                            />
                        </InputGroup>
                        <InputGroup className="mt-3">
                            <div align='right'>
                                <Button 
                                    variant='success' 
                                    style={{width: '100%'}}
                                    onClick={signUp}
                                >Sign Up</Button>
                            </div>
                        </InputGroup>
                    </Form>
                }
            </CModal>
    )
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
export default connect(mapStateToProps, mapDispatchToProps) (SignModal);