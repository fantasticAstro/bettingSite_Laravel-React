
import CTab  from "../../../Component/CTab";
import * as actionTypes from '../../../../store/actions' ;

function RightPart(props) {
    const bist_history_tabs = [
        {name: 'BEST SLIP', content: 'You Don’t Have Any Bid Right Now !'},
        {name: 'OPEN BET', content: 'You Don’t Have Any Bid Right Now !'},

    ] ;
    return(
        <div className='right-part'>
            <div className="available-credit report-dlg">
                <div className="title">
                    AVAILABLE CREDIT
                </div>
                <div className="content">
                    <div className="item">
                        <div className="name">ACCOUNT BALANCE</div>
                        <div className="value">: $500</div>

                    </div>
                    <div className="item">
                        <div className="name">LAST CREDIT</div>
                        <div className="value">: $1000</div>
                    </div>
                </div>
            </div>   
            <div className="bid-history report-dlg">
                <div className="title"> 
                    BID HISTORY
                </div>
                <div className="content">
                    <CTab tabs={bist_history_tabs}/>
                </div>
            </div>         
        </div>
    ) ;
}

export default RightPart ;
// const mapStateToProps = state => {
//     return {
//         bet_slip: state.bet_slip
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(windowSize(RightPart)));