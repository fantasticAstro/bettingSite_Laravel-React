import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CModal from '../../../Component/CModal';
import api from '../../../../api/admin/user_detail' ;
function UserDetail(props) {

    const [user_info, setUserInfo] = useState({point:0, full_name:'', email:'', mobile_number:'',regist_date:''}) ;
    const [modal_title, setModalTitle] = useState("Add Points") ;
    const [point_modal, setPointModal] = useState(false) ;
    const [point_form, setPointForm] = useState({point: 0}) ;
    
    useEffect(() => {
        // setBlocking(true) ;
        api.getUserInfo({id: props.match.params.id}).then(result =>{
            setUserInfo(result) ;
        }) ;
        return ;
    }, 1);
    const openPointModal = (modal_title) => {
        let _point_modal = point_modal ;
        setModalTitle(modal_title) ;
        setPointModal(!_point_modal) ;
    }

    const validateAddUserForm = (event) => {
        const name =event.target.name ;
        const value = event.target.value ;
        let obj = {} ; obj[name] = value
        setPointForm({...obj}) ;
    }
    const editPoint = () => {
        api.editPoint(
            {
                point: point_form.point, 
                id: props.match.params.id,
                type: modal_title
            }
        ).then(result =>{

        }) ;
    }
    return (
        <div>
            <Row>
                <Col md={5}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">User Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td style={{color: 'black'}}>User Status</td>
                                        <td>
                                            <a><span class="badge badge-success">Yes</span></a>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td style={{color: 'black'}}>Betting Status</td>
                                        <td>
                                            <a><span class="badge badge-success">Yes</span></a>
                                        </td>
                                    </tr>    
                                </tbody>
                            </Table>
                            <div>
                                <h3 align='center'>Wallet Balance</h3>
                                <div align='center'>
                                    {user_info.point}<span style={{color: 'green', fontSize: '15px'}}>Points</span>
                                </div>
                                <p align='center' style={{marginTop: '15px'}}>
                                    <Button variant='primary' onClick={() =>openPointModal("Add Points")}>Add Points</Button>
                                    <Button variant='danger' onClick={() =>openPointModal("WithDraw Points")}>WithDraw Points</Button>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={7}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">User Profiles</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td style={{color: 'black'}}>Full Name</td>
                                        <td>
                                            {user_info.full_name}
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td style={{color: 'black'}}>Email</td>
                                        <td>
                                            {user_info.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{color: 'black'}}>Mobile Phone</td>
                                        <td>
                                            {user_info.mobile}
                                        </td>
                                    </tr>   
                                    <tr>
                                        <td style={{color: 'black'}}>Registration Date</td>
                                        <td>
                                            {user_info.regist_date}
                                        </td>
                                    </tr>    
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
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
                            value={point_form.point}
                            onChange={(event)=>validateAddUserForm(event)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <div align='right'>
                            <Button variant='primary' onClick={editPoint}>Submit</Button>
                            <Button variant='danger' onClick={() => openPointModal('')}>Close</Button>    
                        </div>
                    </Form.Group>
                    
                </Form>
            </CModal>
        </div>
    )
}

export default UserDetail ;