import {Row, Col, Card} from 'react-bootstrap' ;
import api from '../../../../api/admin/dashboard' ;
import { useState, useEffect } from 'react';
function DashBoard(props) {
    const [dash_info, setDashInfo] = useState({"approved_user":0, unapproved_user:0, bet_count:0, bet_amount:0})
    useEffect(() => {
        // setBlocking(true) ;
        api.getDashInfo().then(result =>{
            setDashInfo(result) ;
        }) ;
        return ;
    }, 1);
    return (
        <div>
            <Row>
                <Col md={4} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>
                                Approved Users
                                <a href='/' style={{marginLeft: '20px'}}>More Info <i class="fa fa-arrow-circle-right"></i></a>
                            </h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {dash_info.approved_user}</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col md={4} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>
                                Un-Approved Users
                                <a href='/' style={{marginLeft: '20px'}}>More Info <i class="fa fa-arrow-circle-right"></i></a>
                            </h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {dash_info.unapproved_user}</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col md={4} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>
                                Total Bid Amount
                                <a href='/' style={{marginLeft: '20px'}}>More Info <i class="fa fa-arrow-circle-right"></i></a>
                            </h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {dash_info.bet_amount}</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col md={4} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>
                                Number Of Bids
                                <a href='/' style={{marginLeft: '20px'}}>More Info <i class="fa fa-arrow-circle-right"></i></a>
                            </h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> {dash_info.bet_count}</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                </Col> 
            </Row>
        </div>
    )
} 
export default DashBoard ;