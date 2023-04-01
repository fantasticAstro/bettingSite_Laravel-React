
import CTab  from "../../../Component/CTab";
import * as actionTypes from '../../../../store/actions' ;
import { Tab } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux' ;
function RightPart(props) {
    
    const redux_user_auth = useSelector(state => state.user_auth) ; 
    const redux_best_slip = useSelector(state => state.best_slip) ; 

    const bet_history_tabs = [
        {name: 'BEST SLIP', content: redux_best_slip},
        {name: 'OPEN BET', content: 'You Don’t Have Any Bid Right Now !'},
    ] ;
    
    return(
        <div className='right-part'>
            {
                redux_user_auth ?
                <div className="available-credit report-dlg">
                    <div className="title">
                        AVAILABLE CREDIT
                    </div>
                    <div className="content">
                        <div className="item">
                            <div className="name">ACCOUNT BALANCE</div>
                            <div className="value">: ${redux_user_auth.now_point}</div>

                        </div>
                        <div className="item">
                            <div className="name">LAST CREDIT</div>
                            <div className="value">: ${redux_user_auth.last_credit_point}</div>
                        </div>
                    </div>
                </div>:
                <></>
            }
            <div className="bid-history report-dlg">
                <div className="title"> 
                    BET HISTORY
                </div>
                <div className="content">
                    <CTab>
                        {
                            bet_history_tabs.map((tab,index) =>
                                <Tab eventKey={tab.name} title={tab.name} >
                                    {
                                        index == 0 ? 
                                            redux_best_slip.length > 0 ?
                                            <>
                                                <div className='list'>
                                                    {
                                                        redux_best_slip.map((item, key) =>
                                                            <div className='item'>
                                                                {
                                                                    item.bet_name
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </>:
                                            <div style={{
                                                paddingTop: '15px'
                                            }} align='center'>
                                                No data
                                            </div>
                                        :
                                        <div className='letter'>
                                            {
                                                tab.content
                                            }
                                        </div>
                                    }
                                </Tab>
                            )
                        }
                    </CTab>
                </div>
            </div>         
        </div>
    ) ;
}


export default RightPart ;