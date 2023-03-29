
import React, { useEffect, useState } from 'react';
import Config from '../../../../config' ;
import BlockUi from 'react-block-ui';
import { Loader} from 'react-loaders';
import ATable from '../../../Component/ATable';
import api from '../../../../api/admin/game_manage' ;
import CModal from '../../../Component/CModal' ;
import Common from '../../../Utils/Common' ;
import { Form, Button, Card } from 'react-bootstrap';

function GameRates(props) {
    const [rates_list, setRatesList] = useState([]) ;
    const [blocking, setBlocking] = useState(false) ;
    const [rates_form, setRatesForm,] = useState({}) ;
    
    
    useEffect(() => {
        setBlocking(true) ;
        try {
            api.getGameRates().then(result => {
                setRatesList(result) ;
                initRatesForm(result) ;
            }) ;
            setBlocking(false) ;
        }catch(e) {
            setBlocking(false) ;
        }
        return ;
    }, 1);
    const initRatesForm = (data) => {
        let ret = {} ;
        for(var k = 0 ; k < data.length ; k++) {
            ret[data[k].name] = data[k].value ;
        }
        setRatesForm(ret) ;
    }
    const validateAddUserForm = (e) => {
        const nextFormState = {
            ...rates_form,
            [e.target.name]: e.target.value,
        };
            
        setRatesForm(nextFormState) ;
    }
    const saveRatesData =() => {
        let req = [] ;
        for(var k = 0 ; k < rates_list.length ; k++) {
            console.log(rates_list) ;
            req.push({
                id: rates_list[k].id,
                value: rates_form[rates_list[k]['name']] 
            }) ;
        }
        try {
            api.saveGameRates({data: req}).then(result => {
                if(result.status == "200") {
                    Common.toast("success", "Save Successfully") ;
                } else {
                    Common.toast("error", "Save Faield") ;

                }
            }) ;
            setBlocking(false) ;
        }catch(e) {
            setBlocking(false) ;
            Common.toast("error", "Save Faield") ;
        }
    }
    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Game Rates</Card.Title>
                </Card.Header>
                <Card.Body>
                <Form>
                    
                    {
                        rates_list.map((item, key) =>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>{item.name}</Form.Label>
                                <Form.Control 
                                    type="number"  
                                    value={rates_form[item.name]} 
                                    name={item.name} 
                                    onChange={(event)=>validateAddUserForm(event)}
                                />
                            </Form.Group>
                        )
                    }
                    <Button variant="primary" onClick={saveRatesData}> 
                        Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
} 

export default GameRates ; 