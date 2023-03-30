
import '../../../css/component/market.css' ;
import { Col, Row } from 'react-bootstrap';
import CButton from './CButton';
import {useState, useEffect} from 'react' ;
import * as actionTypes from '../../store/actions' ;
import {connect} from 'react-redux';
import Common from '../Utils/Common' ;
import api from '../../api/market' ;

function Market(props) {    
    const [check_bet, setChecBet] = useState({});
    const [market_list, setMarketList] = useState([{name: '123', open_time:'00:00', time:'00:00'}, {name: '456', time:'00:00', close_time:'00:00'}]); 
    const [sel_market, setMarket] = useState({id: -1, name: '', type:'OPEN', time:'00:00:00'}) ;
    const [total_amount, setTotalAmount] = useState(0)
    const [bet_info, setBetInfo] = useState({id: -1, value:0})

    const [isOpen, setOpen] = useState(false);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    useEffect(() => {
        api.get_market_list({type: props.type}).then(result =>{
            setMarketList(result) ;
            if(result.length > 0) {
                var _sel_market =result[0] ;
                setMarket(_sel_market) ;
            }
        }) ;
        api.get_bet_info({name: props.type}).then(result =>{
            if(result.length > 0) {
                setBetInfo(result[0]) ;
            }
        }) ;
        
        return ;
    }, 1);

    const setCheck = (number) => {
        number = number.toString() ;
        let  _check_bet = check_bet ;
        if(Object.keys(_check_bet).includes(number)) {
            _check_bet[`${number}`] = !_check_bet[`${number}`]  ;
        } else {
            _check_bet[`${number}`] = true ;
        } 
        setChecBet({..._check_bet}) ;
        let _total_amount = 0 ; 
        for(let key in _check_bet) {
            if(_check_bet[key]) {
                _total_amount+=parseInt(bet_info.value);
            }
        }
        setTotalAmount(_total_amount) ;
    }
    

    const saveBet = () => {
        
        let req = [] ;

        try{
            api.save_bet({data: check_bet, bet_id: bet_info.id, market_id:sel_market.id}).then(result =>{
                if(result.status == "200") {
                    Common.toast("success", "Successfully")
                }
            }) ;
        }catch(e) {
            Common.toast("error", "Faield")
        }

    }

    const selMarket = (item) => {
        setMarket(item) ;
        toggleDropdown() ;
    }
    
    return (
        <div className='market'>
            <div className='title'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='date'>
                    2023-03-29
                </div>
            </div>
            <div className='market-list'>
                <div className='dropdown'>
                    <div className='dropdown-header' onClick={toggleDropdown}>
                        {sel_market.name} {sel_market.type} ({sel_market.time})
                        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                    </div>
                    <div className={`dropdown-body ${isOpen && 'open'}`}>
                        {
                            market_list.map(item => (
                                sel_market.id != item.id ?
                                <div className="dropdown-item" onClick={() => selMarket(item)}>
                                    {item.name} {item.type} ({item.time})
                                </div>
                                :<></>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='market-content'>
                <BetField callback={setCheck} check_bet={check_bet} type={props.type}/>
            </div>
            <div className='bid-content'>
                <div className='bid-amount'>
                    TOTAL-BET - $ {total_amount}
                </div>
                <CButton 
                    text='PLACE BID'
                    background='#3F7E68'
                    color='white'
                    padding='10px 15px'
                    fonSize='15px'
                    hoverBackground='rgb(42,90,74)'
                    hoverColor='white'
                    callback = {saveBet}
                />
            </div>
        </div>
    )
}


function BetField(props) {
    let type = props.type ;
    if(type == "single" || type == "single_patti" ) {
        return <SingleBet callback={props.callback} check_bet={props.check_bet}/>
    } else if(type == "double_patti" || type == "jodi"  ) {
        return <DoubleBet callback={props.callback} check_bet={props.check_bet} />
    } else if(type == "tripple_patti") {
        return <TrippleBet callback={props.callback} check_bet={props.check_bet} />
    }
}

function DoubleBet(props) {
    var list = [] ;
    for(var k = 0 ; k<100 ; k++) {
        let key = k.toString() ;
        if(k < 10 ) {
            key = ("0"+key).toString() ;
        }
       
        list.push(<BetNumItem number={key.toString()} is_check={false} callback={props.callback} check_state={props.check_bet[`${key}`]}/>) ;
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

function TrippleBet(props) {
    
    return (
        <div>
            <select class='form-control' style={{width: '30%'}}>
                
            </select>        
        </div>
    )
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
                        <i className='fa fa-check' style={{fontSize: '40px', color: '#4fcb1c'}}></i>:<></>
                    }
                </div>
            </div>
            
        </Col>
    )
}

// export default Market ;

const mapStateToProps = state => {
    return {
        bet_slip: state.bet_slip
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addBetSlip: () => dispatch({type: actionTypes.ADD_BET_SLIP, bet_slip:bet_slip}),
    }
};
export default connect(mapStateToProps, mapDispatchToProps) (Market);
