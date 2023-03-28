
import '../../../css/component/market.css' ;
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import CButton from './CButton';
import {useState} from 'react' ;

function Market(props) {    
    const [check_bet, setChecBet] = useState({});
    const setCheck = (number) => {
        number = number.toString() ;
        let  _check_bet = check_bet ;
        if(Object.keys(check_bet).includes(number)) {
            _check_bet[`${number}`] = !_check_bet[`${number}`]  ;
        } else {
            _check_bet[`${number}`] = true ;
        }    
        setChecBet({..._check_bet}) ;
    }
    
    return (
        <div className='market'>
            <div className='title'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='date'>
                    20232-2
                </div>
            </div>
            <div className='market-list'>
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='market-content'>

                <BetField callback={setCheck} check_bet={check_bet} type={props.type}/>
            </div>
            <div className='bid-content'>
                <div className='bid-amount'>
                    TOTAL-BID - $ 500
                </div>
                <CButton 
                    text='PLACE BID'
                    background='#3F7E68'
                    color='white'
                    padding='10px 15px'
                    fonSize='15px'
                    hoverBackground='rgb(42,90,74)'
                    hoverColor='white'
                />
            </div>
        </div>
    )
}

function BetField(props) {
    let type = props.type ;
    if(type == "signe" || type == "single_patti") {
        return <SingleBet callback={props.callback} check_bet={props.check_bet}/>
    } else if(type == "double_patti" || type == "jodi") {
        return <DoublePattiBet callback={props.callback} check_bet={props.check_bet} />
    } else if(type == "tripple_patti") {
        return <TripplePattiBet callback={props.callback} check_bet={props.check_bet} />
    }
}
function TripplePattiBet(props) {
    
}
function DoublePattiBet(props) {
    var list = [] ;
    for(var k = 0 ; k<100 ; k++) {
        list.push(<BetNumItem number={k} is_check={false} callback={props.callback} check_state={props.check_bet[`${k}`]}/>) ;
    }
    return (
        <Row>
            {list}
        </Row>
    ) ;
}
function SingleBet(props) {
    var list = [] ;
    for(var k = 0 ; k<10 ; k++) {
        list.push(<BetNumItem number={k} is_check={false} callback={props.callback} check_state={props.check_bet[`${k}`]}/>) ;
    }
    return (
        <Row>
            {list}
        </Row>
    ) ;
}

function DoubleBet() {

}
function TrippleBet() {

}


function BetNumItem(props) {
    return (
        <Col  md={3} sm={2} onClick={() => props.callback(props.number)} >
            <div className='item'>
                <div className='bet-number'>
                    {props.number}
                </div>
                <div className='bet-check'>
                    {
                        props['check_state']?
                        <img src="images/user/bet_check.png" width='40px' />:<></>
                    }
                </div>
            </div>
            
        </Col>
    )
}
export default Market ;