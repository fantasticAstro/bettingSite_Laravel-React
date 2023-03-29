
import React, { useEffect, useState } from 'react';
import Config from '../../../../config' ;

import BlockUi from 'react-block-ui';
import { Loader} from 'react-loaders';
import ATable from '../../../Component/ATable';
import api from '../../../../api/admin/user_manage' ;
import CModal from '../../../Component/CModal' ;
import Common from '../../../Utils/Common' ;
import { Form, Button } from 'react-bootstrap';

function UserManage(props) {
    const [user_data, setUserData] = useState([]) ;
    const [blocking, setBlocking] = useState(false) ;
    const [add_user_modal, setAddUserModal] = useState(false) ;
    const [credit_model, setCreditModal] = useState(false) ;

    const [user_form, setUserForm] = useState({username:'', password:'', mobile:''}) ;
    
    useEffect(() => {
        setBlocking(true) ;
        try {
            api.getUserData().then(result => {
                setUserData(result) ;
            }) ;
            setBlocking(false) ;
        }catch(e) {
            setBlocking(false) ;
        }
        return ;
    }, 1);

    const openAddUserModal = () => {
        let _add_user_modal = add_user_modal ;
        setAddUserModal(!_add_user_modal) ;
    }
    const validateAddUserForm = (event) => {
        const name =event.target.name ;
        const value = event.target.value ;
        let _user_form = user_form ;
        _user_form[name] = value ;
        setUserForm(_user_form) ;
    }

    const submitUerForm = () => {
        setBlocking(true)  ;
        try {
            api.addUserData(user_form).then(result =>{
                if(result.status == "200") {
                    Common.toast('success', 'Sign Up Success') ;
                    openAddUserModal() ;
                } else {
                    Common('success', 'Sign Up Failed') ;
                }
                setBlocking(false) ;
            })
        }catch(e) {
            Common('success', 'Sign Up Failed') ;
            setBlocking(false) ;
        }
    }
    const Credit = (data) => {
        
    }
    const Debit = () => {

    }
    const makeDataTableForm = (ret) => {   
        let data = [] ;
        for(let k = 0 ; k < ret.length ; k++) {
            let item = ret[k] ;
            data.push({
                no: (k+1),
                username: item.username,
                usermobile:item.mobile,
                points: item.point,
                credit_debit: 
                    <div style={{padding: '5px'}}>
                        <Button variant="primary" onClick={() => Credit(item.id) }>Credit</Button>
                        <Button variant="success" onClick={() => Debit() }>Debit</Button>
                    </div>,
                view: <a href={`/admin/user_profile/${item.id}`}><i className='fa fa-eye' style={{fontSize: '20px', cursor: 'pointer'}}></i></a>,

            }) ;
        }
        return data ;
    } 
    const makeDataTableColums = () => {
        let columns = [] ;

        columns.push(
            {
                name: 'No',
                selector: 'no',
                sortable: true,
            },
            {
                name: 'User Name',
                selector: 'username',
                sortable: true,
            },
            {
                name: 'User Mobile',
                selector: 'usermobile',
                sortable: true,
            },
            {
                name: 'Points',
                selector: 'points',
                sortable: true,
            },
            {
                name: 'Credit/Debit',
                selector: 'credit_debit',
                sortable: false,
            },    
            {
                name: 'View',
                selector: 'view',
                sortable: false,
            },    
            
        ) ;
        return columns ;
    }
    const renderTable = (val, row) => {
        console.log(val, row) ;
    }

    let columns = makeDataTableColums() ;
    let user_table_data = makeDataTableForm(user_data) ;
    
    return (
        <div>
            <div>
                <button 
                    type='button' 
                    className='btn btn-primary'
                    onClick={openAddUserModal}
                >
                    <i className='fa fa-plus'></i>Add New User
                </button>
            </div>
            <BlockUi tag="div" blocking={blocking}  loader={<Loader active type={Config.blockingType} color={Config.blockingColor} />}>
                <ATable columns={columns} data={user_table_data} />
            </BlockUi>

            <CModal 
                open_modal = {add_user_modal} 
                close_modal = {openAddUserModal}
                title='Add New User'
            >
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Username" 
                            name='username'
                            onChange={(event)=>validateAddUserForm(event)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control 
                            type="number" 
                            name='mobile'
                            onChange={(event)=>validateAddUserForm(event)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            name='password'
                            onChange={(event)=>validateAddUserForm(event)}
                        />
                    </Form.Group>
                    <div align='right'>
                        <Button variant="primary" onClick={submitUerForm}>
                            Submit
                        </Button>
                        <Button variant="danger" onClick={ openAddUserModal}>
                            Close
                        </Button>
                    </div>
                </Form>
            </CModal>
        </div>
    ) 
}

export default UserManage ;