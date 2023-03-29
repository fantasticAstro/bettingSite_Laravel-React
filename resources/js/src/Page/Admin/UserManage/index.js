
import React, { useEffect, useState } from 'react';
import Config from '../../../../config' ;

import BlockUi from 'react-block-ui';
import { Loader} from 'react-loaders';
import ATable from '../../../Component/ATable';
import api from '../../../../api/admin/user_manage' ;
import api_detail from '../../../../api/admin/user_detail' ;
import CModal from '../../../Component/CModal' ;
import Common from '../../../Utils/Common' ;
import { Form, Button } from 'react-bootstrap';

function UserManage(props) {
    const [user_data, setUserData] = useState([]) ;
    const [blocking, setBlocking] = useState(false) ;
    const [add_user_modal, setAddUserModal] = useState(false) ;
    const [point_modal, setPointModal] = useState(false) ;
    const [point_form, setPointForm] = useState(0) ;
    const [user_form, setUserForm] = useState({username:'', password:'', mobile:''}) ;
    const [sel_user_id, setUserId] = useState(-1) ;
    const [modal_title, setModalTitle] = useState("Add Points") ;

    useEffect(() => {
        getUserData() ;
        return ;
    }, 1);

    const getUserData = () => {
        setBlocking(true) ;
        try {
            api.getUserData().then(result => {
                setUserData(result) ;
            }) ;
            setBlocking(false) ;
        }catch(e) {
            setBlocking(false) ;
        }
    }
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

    const openPointModal = (modal_title, id) => {
        let _point_modal = point_modal ;
        setUserId(id) ;
        setModalTitle(modal_title) ;
        setPointModal(!_point_modal) ;
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
                        <Button variant="primary" onClick={() => openPointModal("Add Points", item.id) }>Credit</Button>
                        <Button variant="success" onClick={() => openPointModal("Withdrwa Points", item.id) }>Debit</Button>
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
    const editPoint = () => {
        try {
            api_detail.editPoint(
                {
                    point: point_form, 
                    id: sel_user_id,
                    type: modal_title
                }
            ).then(result =>{
                if(result.status =='200') {
                    Common.toast("success", modal_title+" Successfully") ;
                }
                getUserData() ;
            }) ;    
        }catch(e) {
            Common.toast("error", modal_title+" Failed") ;
        }
        
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
            <CModal
                open_modal = {point_modal} 
                close_modal = {() => openPointModal('')}
                title={modal_title}
                width='40%'
            >
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>{modal_title}</Form.Label>
                        <Form.Control 
                            type="number" 
                            name='point'
                            value={point_form}
                            onChange={(event)=>setPointForm(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <div align='right'>
                            <Button variant='primary' onClick={editPoint}>Submit</Button>
                            <Button variant='danger' onClick={() => openPointModal('', -``)}>Close</Button>    
                        </div>
                    </Form.Group>
                    
                </Form>
            </CModal>

        </div>
    ) 
}

export default UserManage ;