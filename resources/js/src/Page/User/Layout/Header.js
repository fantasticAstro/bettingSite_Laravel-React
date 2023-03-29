
import { Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import CButton from '../../../Component/CButton';
import SearchBar from '../../../Component/SearchBar';
import { Link } from 'react-router-dom';
import CModal from '../../../Component/CModal';
import { useState, useEffect } from 'react';
import api from  '../../../../api/user/auth' ;

function Header(props) {
    const [sign_modal, setSignModal] = useState(false);
    const [modal_title, setModalTitle] = useState("Login");
    const [login_form, setLoginForm] = useState({username:'', password:''}) ;
    const [sign_form, setSignForm] = useState({username:'', password:'', email:'', full_name:'', password_confirm:'', mobile:''}) ;

    const logIn = () => {

    }
    const signUp = () => {
        try {
            api.signUp(sign_form).then(result => {
       
            }) ;
        }catch(e) {
            setBlocking(false) ;
        }
    }
    const openSignModal = (title) => {
        setModalTitle(title);
        let _sign_modal = sign_modal;
        setSignModal(!_sign_modal);
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
                <div className='sign-field'>
                    <CButton
                        text='Log In'
                        background='#F5E04D'
                        color='black'
                        fontSize='12px'
                        callback={() => openSignModal('Login')}
                    />
                    <CButton
                        text='Sign Up'
                        background='white'
                        color='black'
                        marginLeft='5px'
                        fontSize='12px'
                        callback={() => openSignModal('SignUp')}
                        marginRight='10px'
                    />

                </div>
            </div>
            <CModal
                open_modal={sign_modal}
                close_modal={() => openSignModal('')}
                width='500px'
                title={modal_title}
            >
                {
                    modal_title == "Login"?
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" 
                                name='username'
                                onChange={(event)=>validateLoginForm(event)}
                                value = {login_form.username}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name='password'
                                onChange={(event)=>validateLoginForm(event)}
                                value = {login_form.username}
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
                        <Form.Group controlId="formBasicPassword">
                            <div align='right'>
                                <Button 
                                    variant='success' 
                                    style={{width: '100%'}}
                                    onClick={signUp}
                                >Sign Up</Button>
                            </div>
                        </Form.Group>
                    </Form>
                }
                

            </CModal>
        </div>
    );
}
export default Header;