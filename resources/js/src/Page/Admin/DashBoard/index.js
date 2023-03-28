import {Row, Col, Card} from 'react-bootstrap' ;

function DashBoard(props) {
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
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="fa fa-arrow-up text-c-green f-30 m-r-20"/> $249.95</h3>
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