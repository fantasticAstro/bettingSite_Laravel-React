import { useState, useEffect } from "react";
import api from '../../../../api/admin/transaction' ;
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from 'react-date-picker' ;
import ATable from '../../../Component/ATable';
function Transaction(props) {

    const [filter_date, setFilterDate] = useState(new Date());
    const [trans_data, setTransData] = useState({deposit:0, withdraw:0, profit:0, log:[]})

    useEffect(() => {
        getTransData() ;
        return ;
    }, 1);
    
    const getTransData = () => {
        try {
            api.getTransData({date: filter_date}).then(result => {
                setTransData(result) ;
            }) ;
        }catch(e) {
            
        }
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
                selector: 'mobile',
                sortable: true,
            },
            {
                name: 'Type',
                selector: 'type',
                sortable: true,
            },
            {
                name: 'Amount',
                selector: 'amount',
                sortable: true,
            },
        ) ;   
        return columns ;
    }
    const makeDataTableForm = (data) => {
        let ret = [] ;
        for(let k = 0 ; k <data.length ; k++) {
            let item = data[k] ;
            ret.push({
                no: (k+1),
                username: item.username,
                mobile: item.mobile,
                type: item.type,
                amount: item.point
            }) ;
        }
        return ret ;
    }
    let columns = makeDataTableColums() ;
    let trans_table_data = makeDataTableForm(trans_data.log) ;
    
    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title as="h3">Filters</Card.Title>
                </Card.Header>
                <Card.Body>
                    <h5>Date</h5>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formBasicEmail">
                                    <DatePicker 
                                        onChange={setFilterDate} 
                                        value={filter_date} 
                                    />
                                    <Button 
                                        variant="primary"
                                        style={{padding: '3px', marginLeft: '15px'}}
                                        onClick={getTransData}
                                    >SAVE</Button>
                                
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Today's Deposit</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>{trans_data.deposit}</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>WITHDRAWAL</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>
                                        {trans_data.withdraw}
                                    </h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Total Profit</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>
                                        {trans_data.profit}
                                    </h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Card>
                <Card.Body>
                    <ATable columns={columns} data={trans_table_data} />
                </Card.Body>
            </Card>

        </div>
    )
}

export default Transaction ;