import api from '../../../../api/admin/declare_result' ;
import { useState, useEffect } from 'react';
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from 'react-date-picker' ;
import ATable from '../../../Component/ATable';
import Select from 'react-select';
import $ from 'jquery' ;
import Common from '../../../Utils/Common';
function DeclareResult(props) {
    
    const [game_list, setGameList] = useState([]) ;
    const [game_data, setGameData] = useState([]) ;
    const [patti_list, setPattiList] = useState([]) ;
    const [digit, setDigit] = useState(0) ;
    const [filter_date, setFilterDate] = useState(new Date()) ;
    const [sel_session, setSession] = useState("");
    const [sel_patti, setSelPatti] = useState("") ;
    const [sel_game, setSelGame] = useState(-1) ;
    
    useEffect(() => {
        getGameData() ;
        getFilterData();
        return ;
    }, 1);
    const getGameData = () => {
        try {
            api.getGameData({date: filter_date}).then(result => {
                setGameData(result) ;
            }) ;
        }catch(e) {
            
        }
    }

    const saveData = () => {
        try {
            api.saveData({
                digit: digit,
                game_id: sel_game,
                session: sel_session,
                date: filter_date,
                patti: sel_patti
            }).then(result => {
                getGameData() ;
                Common.toast("success", "Saved Successfully.") ;
            }) ;
        }catch(e) {
            Common.toast("error", "Saved Failed.") ;
        }
    }
    
    const deleteData = (id) => {
        try {
            api.deleteData({
                id: id
            }).then(result => {
                getGameData() ;
                Common.toast("success", "Deleted Successfully.") ;
            }) ;
        }catch(e) {
            console.log(e) ;
            Common.toast("error", "Deleted Failed.") ;
        }
    }
    const getFilterData = () => {
        try {
            api.getFilterData().then(result => {
                let temp = [] ;
                for(var k = 0 ; k< result.game_list.length ; k++) {
                    temp.push({
                        label: result.game_list[k].name,
                        value: result.game_list[k].id   
                    }) ;
                }
                setGameList(temp) ;

                temp = [] ;
                for(var k = 0 ; k<result.patti_list.length ; k++) {
                    temp.push({
                        label: result.patti_list[k],
                        value: result.patti_list[k]
                    })
                }
                setPattiList(temp);
                setDigit(result.digit) ;
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
                name: 'Game Name',
                selector: 'name',
                sortable: true,
            },
            {
                name: 'Result Date',
                selector: 'date',
                sortable: true,
            },
            {
                name: 'Open Patti',
                selector: 'open_patti',
                sortable: true,
            },
            {
                name: 'Close Patti',
                selector: 'close_patti',
                sortable: true,
            },
            {
                name: 'Action',
                selector: 'action',
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
                name: item.name,
                date: item.date,
                open_patti: item.open_patti,
                close_patti: item.close_patti,
                action: <div style={{padding: '5px'}}><Button variant='danger' onClick={() => deleteData(item.id)}>Delete</Button></div>
            }) ;
        }
       return ret ;
    }
    
    const columns = makeDataTableColums() ;
    const game_data_table = makeDataTableForm(game_data);

    return (
        <div>
           <Card>
                <Card.Header>
                    <Card.Title as="h3">Filters</Card.Title>
                </Card.Header>
                <Card.Body>
                    
                    <Form>
                        <Row>
                            <Col md={2}>
                                <h5>Date</h5>
                                <Form.Group controlId="formBasicEmail">
                                    <DatePicker 
                                        onChange={setFilterDate} 
                                        value={filter_date}
                                        style={{width: '100%'}}
                                        
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <h5>Game</h5>
                                <Select
                                    options={game_list}
                                    onChange={(opt) => setSelGame(opt.value)}
                                />
                            </Col>
                            <Col md={2}>
                                <h5>Session</h5>
                                <Select
                                    options={[
                                        {label:'Open', value:'open'},
                                        {label:'Close', value:'close'},
                                    ]}
                                    onChange={(opt) => setSession(opt.value)}

                                />
                            </Col>
                            <Col md={2}>
                                <h5>Patti</h5>
                                <Select
                                    options={patti_list}
                                    onChange={(opt) => setSelPatti(opt.value)}
                                />
                            </Col>
                            <Col md={1}>
                                <h5>Digit</h5>
                                <Form.Control 
                                    style={{height: '40px'}}
                                    disabled
                                    value={digit}
                                />
                            </Col>
                            <Col md={1} style={{"paddingTop": '30px'}}>
                                <Button variant='success' onClick = {saveData} >Save</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card> 

            <Card>
                <Card.Body>
                    <DatePicker 
                        onChange={setFilterDate} 
                        value={filter_date}
                        style={{width: '100%'}}
                    />
                    <ATable columns={columns} data={game_data_table} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default DeclareResult ;